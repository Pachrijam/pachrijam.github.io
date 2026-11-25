"""
    This program outputs my contact information
    and allows you to send me a message!

"""

def main(sendMessage):

    # My Information
    myName = "Paul Allen"
    myEmail = "paul830a@gmail.com"
    myPhone = "9085910650"
    myAddress = "Barton Hall, Rensselaer Polytechnic Institute, Troy NY"

    print(f"Name: {myName}\nEmail: {myEmail}\nPhone: {myPhone}\nAddress: {myAddress}\n")

    if(sendMessage):
        # Input user information
        yourName = input(str("Name: "))
        yourEmail = input(str("Email: "))
        yourMessage = input(str("Message: "))

        print(f"Hi {yourName}! I will be in touch shortly!")

if __name__ == "__main__":
    sendMessage = input("Enter \"True\" if you would like to send me a message: ").strip().lower() == "true"
    main(sendMessage)