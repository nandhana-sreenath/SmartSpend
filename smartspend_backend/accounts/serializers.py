from rest_framework import serializers
from .models import BudgetSettings,Expense


class BudgetSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BudgetSettings
        fields = '__all__'

class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'

# class UtilitySettings(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     utility_breakdown = models.JSONField(default=dict)  # stores category: amount
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.user.email}'s Utility Settings"

