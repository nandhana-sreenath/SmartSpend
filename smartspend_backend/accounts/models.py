# from django.db import models
# from django.contrib.auth.models import User

# # models.py
# class BudgetSettings(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     month = models.IntegerField(null=True, blank=True)  # 1–12
#     year = models.IntegerField(null=True, blank=True)
#     net_income = models.FloatField(null=True)
    

#     # net_income = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#     utilities = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#     education = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#     food = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#     transport = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#     personal = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    

# class Expense(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     title = models.CharField(max_length=255, default='Untitled') 
#     category = models.CharField(max_length=50)
#     amount = models.DecimalField(max_digits=10, decimal_places=2)
#     date = models.DateField()

#     def __str__(self):
#         return f"{self.category} - ₹{self.amount} on {self.date}"


# class UserProfile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     onboarding_completed = models.BooleanField(default=False)

#     def __str__(self):
#         return f"{self.user.username}'s Profile"
    


# class MonthlyFinance(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     month = models.CharField(max_length=10)  # e.g. "Jan", "Feb"
#     income = models.FloatField(default=0)
#     spent = models.FloatField(default=0)

#     def __str__(self):
#         return f"{self.user.email} - {self.month}"




from django.db import models
from django.contrib.auth.models import User

# models.py
class BudgetSettings(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    month = models.IntegerField(null=True, blank=True)  # 1–12
    year = models.IntegerField(null=True, blank=True)
    net_income = models.FloatField(null=True)

    

    # net_income = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    utilities = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    education = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    food = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    transport = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    personal = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    class Meta:
        unique_together = ('user', 'month', 'year') 
    

class Expense(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, default='Untitled') 
    category = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()

    def __str__(self):
        return f"{self.category} - ₹{self.amount} on {self.date}"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    onboarding_completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username}'s Profile"
    


class MonthlyFinance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    month = models.CharField(max_length=10)  # e.g. "Jan", "Feb"
    income = models.FloatField(default=0)
    spent = models.FloatField(default=0)

    def __str__(self):
        return f"{self.user.email} - {self.month}"

