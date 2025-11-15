from django.urls import path
from .views import signup_view, login_view, onboarding_view, dashboard_summary, budget_settings_view,fetch_settings_view,add_expense_view,get_expenses_view,edit_expense_view,utility_trends_view,monthly_finance_view





urlpatterns = [
    path('', login_view), 
    path('signup/', signup_view),
    path('onboarding/', onboarding_view),
    path('dashboard/summary/', dashboard_summary),
    path('settings/', budget_settings_view),     # POST
    path('settings/fetch/', fetch_settings_view),# GET
    path('expenses/', add_expense_view),       # POST
    path('expenses/fetch/', get_expenses_view), # GET
    path('expenses/edit/', edit_expense_view),  # PUT
    path('dashboard/utilities/', utility_trends_view),    # GET
    path('dashboard/monthly-finance/', monthly_finance_view),  # GET
    
]