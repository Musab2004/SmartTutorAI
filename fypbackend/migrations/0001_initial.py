# Generated by Django 4.2.3 on 2023-11-23 08:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import fypbackend.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('name', models.CharField(help_text='Name of the Author', max_length=100)),
                ('email_address', models.EmailField(help_text='Email of the person', max_length=100, unique=True)),
                ('location', models.TextField()),
                ('current_academic_level', models.TextField()),
                ('profile_pic', models.ImageField(default='images/default_profile_pic.jpg', null=True, upload_to='images/')),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', fypbackend.models.PersonManager()),
            ],
        ),
        migrations.CreateModel(
            name='AnswersPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isreply', models.BooleanField()),
                ('text', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('is_downvoted', models.ManyToManyField(blank=True, related_name='downvoted_answers', to=settings.AUTH_USER_MODEL)),
                ('is_upvoted', models.ManyToManyField(blank=True, related_name='upvoted_answers', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('author', models.CharField(max_length=100)),
                ('publication_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Chapter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('order', models.PositiveIntegerField()),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fypbackend.book')),
            ],
        ),
        migrations.CreateModel(
            name='QueryPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('is_downvoted', models.ManyToManyField(blank=True, related_name='downvoted_posts', to=settings.AUTH_USER_MODEL)),
                ('is_upvoted', models.ManyToManyField(blank=True, related_name='upvoted_posts', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='StudyPlan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('duration', models.IntegerField()),
                ('description', models.TextField()),
                ('image', models.ImageField(blank=True, default='study_plan_images/default_image.png', null=True, upload_to='study_plan_images/')),
                ('books', models.ManyToManyField(to='fypbackend.book')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fypbackend.chapter')),
            ],
        ),
        migrations.CreateModel(
            name='WeeklyGoals',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_date', models.DateField()),
                ('is_completed', models.BooleanField()),
                ('is_started', models.BooleanField()),
                ('end_date', models.DateField()),
                ('study_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='weekly_goals', to='fypbackend.studyplan')),
                ('topics_covered', models.ManyToManyField(blank=True, related_name='covered_in_weekly_goals', to='fypbackend.topic')),
                ('topics_to_be_covered', models.ManyToManyField(blank=True, related_name='planned_in_weekly_goals', to='fypbackend.topic')),
            ],
        ),
        migrations.CreateModel(
            name='ReportPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reason', models.TextField()),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reported_posts', to='fypbackend.querypost')),
                ('reporter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ReportAnswers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reason', models.TextField()),
                ('answerpost', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reported_comments', to='fypbackend.answerspost')),
                ('reporter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('topic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fypbackend.topic')),
                ('weekid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fypbackend.weeklygoals')),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('is_mcq', models.BooleanField(default=True)),
                ('distractors', models.TextField()),
                ('quiz', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fypbackend.quiz')),
            ],
        ),
        migrations.AddField(
            model_name='querypost',
            name='study_plan',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='fypbackend.studyplan'),
        ),
        migrations.AddField(
            model_name='answerspost',
            name='parent',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='parent_post', to='fypbackend.querypost'),
        ),
        migrations.AddField(
            model_name='answerspost',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='fypbackend.querypost'),
        ),
    ]