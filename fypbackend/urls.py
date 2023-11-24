from django.urls import path

from . import views

# urlpatterns = [
#     path('studyplans/', StudyPlanListCreateView.as_view(), name='studyplan-list'),
#     path('studyplans/<int:pk>/', StudyPlanDetailView.as_view(), name='studyplan-detail'),
#     path('quizzes/', QuizListCreateView.as_view(), name='quiz-list'),
#     path('quizzes/<int:pk>/', QuizDetailView.as_view(), name='quiz-detail'),
# ]
urlpatterns = [
    # ... (existing patterns)
    path('api/questions/', views.QuestionListCreate.as_view(), name='question-list'),
    path('api/questions/<int:pk>/', views.QuestionDetailsUpdate.as_view(), name='question-detail'),
    path('api/custom-login/', views.custom_login, name='custom_login'),
    path('api/quizzes/', views.QuizListCreate.as_view(), name='quiz-list'),
    path('api/quizzes/<int:pk>/', views.QuizDetailsUpdate.as_view(), name='quiz-detail'),
    path('api/weeklygoals/', views.WeeklyGoalsListCreate.as_view(), name='weeklygoals-list'),
    path('api/weeklygoals/<int:pk>/', views.WeeklyGoalsDetailsUpdate.as_view(), name='weeklygoals-detail'),
    path('api/reportanswers/', views.ReportAnswersListCreate.as_view(), name='reportanswers-list'),
    path('api/reportanswers/<int:pk>/', views.ReportAnswersDetailsUpdate.as_view(), name='reportanswers-detail'),
    path('api/reportposts/', views.ReportPostListCreate.as_view(), name='reportpost-list'),
    path('api/reportposts/<int:pk>/', views.ReportPostDetailsUpdate.as_view(), name='reportpost-detail'),
    path('api/answersposts/', views.AnswersPostListCreate.as_view(), name='answerspost-list'),
    path('api/answersposts/<int:pk>/', views.AnswersPostDetailsUpdate.as_view(), name='answerspost-detail'),
    path('api/queryposts/', views.QueryPostListCreate.as_view(), name='querypost-list'),
    path('api/queryposts/<int:pk>/', views.QueryPostDetailsUpdate.as_view(), name='querypost-detail'),
    path('api/topics/', views.TopicListCreate.as_view(), name='topic-list'),
    path('api/topics/<int:pk>/', views.TopicDetailsUpdate.as_view(), name='topic-detail'),
    path('api/chapters/', views.ChapterListCreate.as_view(), name='chapter-list'),
    path('api/chapters/<int:pk>/', views.ChapterDetailsUpdate.as_view(), name='chapter-detail'),
    path('api/books/', views.BookListCreate.as_view(), name='book-list'),
    path('api/books/<int:pk>/', views.BookDetailsUpdate.as_view(), name='book-detail'),
    path('api/studyplans/', views.StudyPlanListCreate.as_view(), name='studyplan-list'),
    path('api/studyplans/<int:pk>/', views.StudyPlanDetailsUpdate.as_view(), name='studyplan-detail'),
    path('api/users/', views.UserListCreate.as_view(), name='user-list'),
    path('api/users/<int:pk>/', views.UserDetailsUpdate.as_view(), name='user-detail'),
    # Add similar URL patterns for other models' views
    # Add similar URL patterns for other models' views
]
