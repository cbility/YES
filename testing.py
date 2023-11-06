import requests 

url = "https://app.smartsuite.com/api/v1/applications/64d155a9c71c81dc0b41d52d/"
headers = {
    "Authorization": "Token bb7afd0906f8c666a21d15daf1924ff368843cd8",
    "ACCOUNT-ID": "s5ch1upc",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)

print(response.json())