import pandas as pd

def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
  employees['Bonus'] = employees['Salary'] * 2
  return employees