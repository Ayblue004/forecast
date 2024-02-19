import uvicorn
from fastapi import *

app = FastAPI()

@app.get("/endpoint")
async def basic_point():
    return "We love corn!!!"

@app.post("/login")
async def login(request: Request):
    payload = await request.json()

    username = payload["username"]
    password = payload["password"]

    raise HTTPException(401, "You are not authorised")


if __name__ == "__main__":
    uvicorn.run("index:app", host="127.0.0.1", port=80, reload=True) # http://127.0.0.1:80