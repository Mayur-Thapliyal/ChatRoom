import re 
from ChatAppDjango.constants import INVALID_MESSAGES

def valid_name(name: str):
    """
    To validate given string is a Name
    """
    name = name.strip()
    name.casefold().strip()
    if len(name)< 3:
        raise ValueError(INVALID_MESSAGES['name'])

    namelist = name.split(" ")
    for name in namelist:
        if name.isalnum() is False:
            raise ValueError(INVALID_MESSAGES['name'])
    return True



def valid_email(email):
    """
    To check if email is valid or not
    dependent on .utility.check_email(var)
    """
    email = email.strip()
    regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
    if re.fullmatch(regex, email): 
        return True
    else:
        raise ValueError(INVALID_MESSAGES['email'])


def valid_phone_num(phone_num):
    """
    To validate Phone Number
    """

    phone_num = phone_num.strip()
    # print(phone_num,phone_num[0:3],type(phone_num[0]),phone_num[0] != '+')
    if phone_num[0] != '+':
        raise ValueError(INVALID_MESSAGES['phone'])

    elif phone_num[:3] == '+91':
        regex = "^(\+91|\+91\-|0)?[6789]\d{9}$"

    else:
        regex = r"^(\+[0-9]|\+[0-9]\-|0)?[1-9]\d{5,13}$"

    if re.fullmatch(regex, phone_num): 
        return True
    else:
        raise ValueError(INVALID_MESSAGES['phone'])

# class CustomError(Exception):
#     def __init__(self, message=OOPS):
#         self.message = message
#         super().__init__(self.message)
        
