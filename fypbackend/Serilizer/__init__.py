from rest_framework import serializers
from ..models import StudyPlan,Quiz,User,Topic,QueryPost,AnswersPost,ReportPost,ReportAnswers,WeeklyGoals,Quiz,Question,Chapter,Book

# class DocumentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Document
#         fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class StudyPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyPlan
        fields = '__all__'        
class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = '__all__'
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

class QueryPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = QueryPost
        fields = '__all__'


class AnswersPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnswersPost
        fields = '__all__'
class ReportPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportPost
        fields = '__all__'

class ReportAnswersSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportAnswers
        fields = '__all__'
class WeeklyGoalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeeklyGoals
        fields = '__all__'
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'