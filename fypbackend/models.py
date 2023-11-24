

from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager,PermissionsMixin, Group, Permission

    
class PersonManager(BaseUserManager):
    use_in_migrations = True
    def create_user(self, email_address, password=None, **extra_fields):
        if not email_address:
            raise ValueError("The Email field must be set")
        email_address = self.normalize_email(email_address)
        user = self.model(email_address=email_address, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email_address, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email_address, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=100, help_text="Name of the Author")
    email_address = models.EmailField(max_length=100, unique=True, help_text="Email of the person")
    location = models.TextField()
    current_academic_level = models.TextField()
    profile_pic = models.ImageField(upload_to='images/', null=True, default='images/default_user.png')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    SHIRT_SIZES = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large'),
    )

    objects = PersonManager()

    USERNAME_FIELD = 'email_address'
    REQUIRED_FIELDS = ['name','age']  # Add other required fields for user creation

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email_address

class StudyPlan(models.Model):
    name = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    books = models.ManyToManyField('Book')
    duration = models.IntegerField()
    description = models.TextField()
    image = models.ImageField(
        upload_to='images/',
        blank=True,
        null=True,
        default='images/default_studyplan.jpeg'  # Default image path
    )

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    publication_date = models.DateField()

    def __str__(self):
        return self.title  # Return the title of the book


class Chapter(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    order = models.PositiveIntegerField()  # To specify the order of the chapters

    def __str__(self):
        return self.title

class Topic(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title
class QueryPost(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    study_plan = models.ForeignKey(StudyPlan, on_delete=models.CASCADE, related_name='posts', blank=True, null=True)
    is_upvoted = models.ManyToManyField(User, related_name='upvoted_posts', blank=True)
    is_downvoted = models.ManyToManyField(User, related_name='downvoted_posts', blank=True)
    def __str__(self):
        return self.title

class AnswersPost(models.Model):
    post = models.ForeignKey(QueryPost, on_delete=models.CASCADE, related_name='comments')
    isreply= models.BooleanField()
    parent=models.ForeignKey(QueryPost, on_delete=models.CASCADE, related_name='parent_post')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_upvoted = models.ManyToManyField(User, related_name='upvoted_answers', blank=True)
    is_downvoted = models.ManyToManyField(User, related_name='downvoted_answers', blank=True)

    # study_plan = models.ForeignKey(StudyPlan, on_delete=models.CASCADE, related_name='comments', blank=True, null=True)

    def __str__(self):
        return f'Comment by {self.author} on {self.post.title}' 
class ReportPost(models.Model):
    post = models.ForeignKey(QueryPost, on_delete=models.CASCADE, related_name='reported_posts')
    reporter = models.ForeignKey(User, on_delete=models.CASCADE)
    reason = models.TextField()

class ReportAnswers(models.Model):
    answerpost = models.ForeignKey(AnswersPost, on_delete=models.CASCADE, related_name='reported_comments')
    reporter = models.ForeignKey(User, on_delete=models.CASCADE)
    reason = models.TextField()    
          
class WeeklyGoals(models.Model):
    study_plan = models.ForeignKey(StudyPlan, related_name='weekly_goals', on_delete=models.CASCADE)
    start_date = models.DateField()
    is_completed = models.BooleanField()
    is_started = models.BooleanField()
    end_date = models.DateField()
    topics_to_be_covered = models.ManyToManyField(Topic, related_name='planned_in_weekly_goals', blank=True)
    topics_covered = models.ManyToManyField(Topic, related_name='covered_in_weekly_goals', blank=True)

    def __str__(self):
        return f"Weekly Goals for {self.study_plan.name}" 
class Quiz(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    weekid = models.ForeignKey(WeeklyGoals, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    content = models.TextField()
    is_mcq = models.BooleanField(default=True)
    distractors = models.TextField()    