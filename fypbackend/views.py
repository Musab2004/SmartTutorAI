from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import User
from .Serilizer import UserSerializer,QueryPostSerializer,QuestionSerializer,QuizSerializer,TopicSerializer,AnswersPostSerializer,ReportAnswersSerializer,ReportPostSerializer,StudyPlanSerializer,WeeklyGoalsSerializer,ChapterSerializer,BookSerializer
from .models import StudyPlan,Quiz,User,Topic,QueryPost,AnswersPost,ReportPost,ReportAnswers,WeeklyGoals,Quiz,Question,Chapter,Book
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.decorators import api_view

class AnswersPostListCreate(generics.ListCreateAPIView):
    queryset = AnswersPost.objects.all()
    serializer_class = AnswersPostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
@api_view(['POST'])
def custom_login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response({'error': 'Please provide both username and password'}, status=400)

    # Check user credentials (You might have your own logic here)
    # Assuming you have a custom user model named CustomUser
    try:
        user = User.objects.get(email_address=email)
    except User.DoesNotExist:
        return Response({'error': 'Invalid username or password'}, status=400)

    if not user.password==password:
        return Response({'error': 'Invalid username or password'}, status=400)
    user = User.objects.get(email_address=email)
    user.is_active = True
    user.save()
    print("User's 'is_active' status updated successfully.")
    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)
    print(refresh)
    print(access_token)
    return Response({'access_token': access_token,'user':user})
class AnswersPostDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = AnswersPost.objects.all()
    serializer_class = AnswersPostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class QuestionListCreate(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class QuestionDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class QuizListCreate(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class QuizDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class WeeklyGoalsListCreate(generics.ListCreateAPIView):
    queryset = WeeklyGoals.objects.all()
    serializer_class = WeeklyGoalsSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class WeeklyGoalsDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = WeeklyGoals.objects.all()
    serializer_class = WeeklyGoalsSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class ReportAnswersListCreate(generics.ListCreateAPIView):
    queryset = ReportAnswers.objects.all()
    serializer_class = ReportAnswersSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class ReportAnswersDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = ReportAnswers.objects.all()
    serializer_class = ReportAnswersSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class ReportPostListCreate(generics.ListCreateAPIView):
    queryset = ReportPost.objects.all()
    serializer_class = ReportPostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class ReportPostDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = ReportPost.objects.all()
    serializer_class = ReportPostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class AnswersPostListCreate(generics.ListCreateAPIView):
    queryset = AnswersPost.objects.all()
    serializer_class = AnswersPostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class AnswersPostDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = AnswersPost.objects.all()
    serializer_class = AnswersPostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class QueryPostListCreate(generics.ListCreateAPIView):
    queryset = QueryPost.objects.all()
    serializer_class = QueryPostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class QueryPostDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = QueryPost.objects.all()
    serializer_class = QueryPostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class TopicListCreate(generics.ListCreateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class TopicDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class ChapterListCreate(generics.ListCreateAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class ChapterDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class BookListCreate(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class BookDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

class StudyPlanListCreate(generics.ListCreateAPIView):
    queryset = StudyPlan.objects.all()
    serializer_class = StudyPlanSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class StudyPlanDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = StudyPlan.objects.all()
    serializer_class = StudyPlanSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]



class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class UserDetailsUpdate(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


