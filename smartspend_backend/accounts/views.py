# from django.contrib.auth import authenticate
# from django.contrib.auth.models import User
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from .models import BudgetSettings,Expense
# from .serializers import BudgetSettingsSerializer,ExpenseSerializer
# from django.http import JsonResponse




# @api_view(['POST'])
# def signup_view(request):
#     username = request.data.get('username')
#     email = request.data.get('email')
#     password = request.data.get('password')

#     # Check for missing fields
#     if not username or not email or not password:
#         return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

#     # Check for duplicates
#     if User.objects.filter(username=username).exists():
#         return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

#     if User.objects.filter(email=email).exists():
#         return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

#     # Create user
#     user = User.objects.create_user(username=username, email=email, password=password)
#     return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)


# @api_view(['POST'])
# def login_view(request):
#     email = request.data.get('email')
#     password = request.data.get('password')

#     try:
#         user_obj = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({'error': 'Invalid email'}, status=status.HTTP_400_BAD_REQUEST)

#     user = authenticate(request, username=user_obj.username, password=password)

#     if user is not None:
#         return Response({
#             'message': 'Login successful',
#             'username': user.username,
#             'email': user.email
#         }, status=status.HTTP_200_OK)
#     else:
#         return Response({'error': 'Invalid password'}, status=status.HTTP_400_BAD_REQUEST)

    

# @api_view(['POST'])
# def onboarding_view(request):
#     email = request.data.get('email')
#     income = request.data.get('income')

#     if not email or not income:
#         return Response({'error': 'Email and income are required'}, status=status.HTTP_400_BAD_REQUEST)

#     # Save income to user profile or a separate model
#     # For now, just echo back
#     return Response({'message': 'Income saved successfully'}, status=status.HTTP_200_OK)




# @api_view(['POST'])
# def add_expense_view(request):
#     email = request.data.get('email')
#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

#     expense = Expense.objects.create(
#         user=user,
#         category=request.data.get('category'),
#         amount=request.data.get('amount'),
#         date=request.data.get('date')
#     )
#     return Response({'message': 'Expense saved successfully'}, status=status.HTTP_201_CREATED)

# @api_view(['GET'])
# def get_expenses_view(request):
#     email = request.query_params.get('email')
#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

#     expenses = Expense.objects.filter(user=user).order_by('-date')
#     serializer = ExpenseSerializer(expenses, many=True)
#     return Response({'expenses': serializer.data}, status=status.HTTP_200_OK)



# @api_view(['POST'])
# def budget_settings_view(request):
#     email = request.data.get('email')

#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

#     settings, created = BudgetSettings.objects.get_or_create(user=user)

#     # Frame 1
#     settings.start_date = request.data.get('start_date') or settings.start_date
#     settings.end_date = request.data.get('end_date') or settings.end_date
#     settings.net_income = request.data.get('net_income') or settings.net_income

#     # Frame 3
#     settings.utilities = request.data.get('utilities') or settings.utilities
#     settings.education = request.data.get('education') or settings.education
#     settings.food = request.data.get('food') or settings.food
#     settings.transport = request.data.get('transport') or settings.transport
#     settings.personal = request.data.get('personal') or settings.personal

#     settings.save()
#     serializer = BudgetSettingsSerializer(settings)
#     return Response(serializer.data, status=status.HTTP_200_OK)



# @api_view(['GET'])
# def fetch_settings_view(request):
#     email = request.query_params.get('email')
#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return Response({'error': 'User not found'}, status=404)

#     try:
#         settings = BudgetSettings.objects.get(user=user)
#     except BudgetSettings.DoesNotExist:
#         return Response({'error': 'Settings not found'}, status=404)

#     serializer = BudgetSettingsSerializer(settings)
#     return Response(serializer.data, status=200)




# @api_view(['GET'])
# def dashboard_summary(request):
#     email = request.GET.get('email')

#     try:
#         user = User.objects.get(email=email)
#     except User.DoesNotExist:
#         return JsonResponse({'error': 'User not found'}, status=404)

#     # Get user's budget settings
#     settings = BudgetSettings.objects.filter(user=user).first()
#     net_income = settings.net_income if settings and settings.net_income else 0

#     # Get total expenses for this user
#     expenses = Expense.objects.filter(user=user)
#     total_expenses = sum(exp.amount for exp in expenses)

#     return JsonResponse({
#         'net_income': float(net_income),
#         'total_expenses': float(total_expenses),
#         'remaining': float(net_income) - float(total_expenses)
#     })



from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import BudgetSettings,Expense,UserProfile
from .serializers import BudgetSettingsSerializer,ExpenseSerializer
from django.http import JsonResponse




@api_view(['POST'])
def signup_view(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not email or not password:
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

    # Create user
    user = User.objects.create_user(username=username, email=email, password=password)

    # ✅ Create profile with onboarding flag
    UserProfile.objects.create(user=user)

    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)



@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user_obj = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Invalid email'}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(request, username=user_obj.username, password=password)

    if user is not None:
        profile = UserProfile.objects.get(user=user)
        return Response({
            'message': 'Login successful',
            'username': user.username,
            'email': user.email,
            'onboarding_completed': profile.onboarding_completed
        }, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid password'}, status=status.HTTP_400_BAD_REQUEST)

    

@api_view(['POST'])
def onboarding_view(request):
    email = request.data.get('email')
    income = request.data.get('income')

    if not email or not income:
        return Response({'error': 'Email and income are required'}, status=400)

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)

    # ✅ Create profile if it doesn't exist
    profile, created = UserProfile.objects.get_or_create(user=user)
    profile.onboarding_completed = True
    profile.save()

    return Response({'message': 'Income saved and onboarding completed'}, status=200)



@api_view(['POST'])
def add_expense_view(request):
    email = request.data.get('email')
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    expense = Expense.objects.create(
        user=user,
        title=request.data.get('title', 'Untitled'),
        category=request.data.get('category'),
        amount=request.data.get('amount'),
        date=request.data.get('date')
    )
    return Response({'message': 'Expense saved successfully'}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_expenses_view(request):
    email = request.query_params.get('email')
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    expenses = Expense.objects.filter(user=user).order_by('-date')
    serializer = ExpenseSerializer(expenses, many=True)
    return Response({'expenses': serializer.data}, status=status.HTTP_200_OK)


# @api_view(['POST'])
# def edit_expense_view(request):
#     expense_id = request.data.get('id')

#     try:
#         expense = Expense.objects.get(id=expense_id)
#     except Expense.DoesNotExist:
#         return Response({'error': 'Expense not found'}, status=404)

#     # Update all editable fields
#     if 'title' in request.data:
#         expense.title = request.data['title']
#     if 'amount' in request.data:
#         expense.amount = request.data['amount']
#     if 'category' in request.data:
#         expense.category = request.data['category']
#     if 'date' in request.data:
#         expense.date = request.data['date']

#     expense.save()
#     return Response({'message': 'Expense updated successfully'}, status=200)


@api_view(['POST'])
def edit_expense_view(request):
    expense_id = request.data.get('id')

    try:
        expense = Expense.objects.get(id=expense_id)
    except Expense.DoesNotExist:
        return Response({'error': 'Expense not found'}, status=404)

    expense.title = request.data.get('title', expense.title)
    expense.amount = request.data.get('amount', expense.amount)
    expense.category = request.data.get('category', expense.category)
    expense.date = request.data.get('date', expense.date)
    expense.save()

    return Response({'message': 'Expense updated successfully'})




@api_view(['POST'])
def budget_settings_view(request):
    email = request.data.get('email')

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

    settings, created = BudgetSettings.objects.get_or_create(user=user)

    # Frame 1
    settings.start_date = request.data.get('start_date') or settings.start_date
    settings.end_date = request.data.get('end_date') or settings.end_date
    settings.net_income = request.data.get('net_income') or settings.net_income

    # Frame 3
    settings.utilities = request.data.get('utilities') or settings.utilities
    settings.education = request.data.get('education') or settings.education
    settings.food = request.data.get('food') or settings.food
    settings.transport = request.data.get('transport') or settings.transport
    settings.personal = request.data.get('personal') or settings.personal

    settings.save()
    serializer = BudgetSettingsSerializer(settings)
    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['GET'])
def fetch_settings_view(request):
    email = request.query_params.get('email')
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)

    try:
        settings = BudgetSettings.objects.get(user=user)
    except BudgetSettings.DoesNotExist:
        return Response({'error': 'Settings not found'}, status=404)

    serializer = BudgetSettingsSerializer(settings)
    return Response(serializer.data, status=200)




@api_view(['GET'])
def dashboard_summary(request):
    email = request.GET.get('email')

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)

    # Get user's budget settings
    settings = BudgetSettings.objects.filter(user=user).first()
    net_income = settings.net_income if settings and settings.net_income else 0

    # Get total expenses for this user
    expenses = Expense.objects.filter(user=user)
    total_expenses = sum(exp.amount for exp in expenses)

    return JsonResponse({
        'net_income': float(net_income),
        'total_expenses': float(total_expenses),
        'remaining': float(net_income) - float(total_expenses)
    })



@api_view(['GET'])
def utility_trends_view(request):
    email = request.query_params.get('email')
    month = int(request.query_params.get('month'))
    year = int(request.query_params.get('year'))

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)

    # Get settings
    settings = BudgetSettings.objects.filter(user=user).first()
    if not settings:
        return Response({'error': 'Budget settings not found'}, status=404)

    # Get expenses for the selected month/year
    expenses = Expense.objects.filter(user=user, date__month=month, date__year=year)

    # Define categories
    categories = ['Food', 'Transport', 'Utilities', 'Education', 'Personal']
    data = []

    for cat in categories:
        # Get allotted amount from settings
        allotted = getattr(settings, cat.lower(), 0)

        # Get spent amount from expenses
        spent = sum(exp.amount for exp in expenses if exp.category.lower() == cat.lower())

        data.append({
            'utility': cat,
            'allotted': float(allotted),
            'spent': float(spent),
            'month': month,
            'year': year
        })

    return Response(data)


# @api_view(['GET'])
# def utility_settings_view(request):
#     email = request.GET.get('email')
#     user = User.objects.get(email=email)
#     settings = UtilitySettings.objects.filter(user=user).first()

#     if not settings:
#         return Response({'error': 'No settings found'}, status=404)

#     return Response(settings.utility_breakdown)  # assuming it's stored as a JSONField