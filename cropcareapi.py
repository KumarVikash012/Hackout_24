from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from PIL import Image
import io
import pickle
from typing import List


app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class data(BaseModel):
    n: List[float]
    Ph: List[float]
    pH: List[float]
    soil: List[str]
    crop: List[str]
    moisture: List[float]
    humidity: List[float]





d = {}
keys = []

def json(content):
    try:
        p = JSONResponse(content=content)
        print(p)
        return p
    except:
        p = JSONResponse(content={"CONVERSION":"FAILED"})



@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    try:
        image = Image.open(io.BytesIO(await file.read()))
        image_path = f"uploaded_images/{file.filename}"
        image.save(image_path)
        return {"filename": file.filename}
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
    
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

@app.post("/fertilizer")
async def predict(request: data):
    try:
        d["Nitrogen"] = request.n
        d["Phosphorous"] = request.Ph
        d["pH Level"] = request.pH
        d["Soil Type"] =request.soil
        d["Crop Type"] =request.crop
        d["Moisture"] = request.moisture
        d["Humidity"] = request.humidity

        import numpy as np
        import pandas as pd
        import pickle
        from sklearn.compose import ColumnTransformer
        from sklearn.preprocessing import OneHotEncoder

        # Load the original dataset
        df = pd.read_csv('Fertilizer Prediction.csv')

        # Separate the features (X) and target variable (y)
        X = df.drop(columns=['Fertilizer Name', 'Potassium', 'Temparature'])
        y = df['Fertilizer Name']

        # Print columns of X to debug
        print("Columns in X:", X.columns)

        # Fit the ColumnTransformer with the original data
        ct = ColumnTransformer(
            transformers=[('encoder', OneHotEncoder(handle_unknown='ignore'), ['Soil Type', 'Crop Type'])],
            remainder='passthrough'
        )

        # Fit the transformer to the training data
        X_transformed = ct.fit_transform(X)

        # Load the pre-trained model from the .pkl file
        with open("random_forest_model.pkl", 'rb') as file:
            classifier = pickle.load(file)
        print(d)
        # Example new data with corrected columns
        new_data = pd.DataFrame({
            'Nitrogen': d["Nitrogen"],
            'Phosphorous':  d["Phosphorous"],  # Corrected column name
            'pH Level': d["pH Level"],
            'Soil Type': d["Soil Type"],
            'Crop Type': d["Crop Type"],
            'Moisture': d["Moisture"],
            'Humidity': d["Humidity"]    # Corrected column name with trailing space
        })

        # Print the new data columns
        print("Columns in new_data:", new_data.columns)

        # Apply the transformations as the training data
        try:
            new_data_transformed = ct.transform(new_data)
        except ValueError as e:
            print(f"Error during transformation: {e}")

        # Predict the fertilizer name for the new data
        try:
            new_data_transformed = ct.transform(new_data)
        except ValueError as e:
            print(f"Error during transformation: {e}")
            return JSONResponse(content={"error": str(e)}, status_code=500)

        # Predict the fertilizer name for the new data
        try:
            new_prediction = classifier.predict(new_data_transformed)
            print("\nPredicted Fertilizer Name:", new_prediction[0])
            return JSONResponse(content={"Predicted Fertilizer": new_prediction[0]})
        except Exception as e:
            print(f"Error during prediction: {e}")
            return JSONResponse(content={"error": str(e)}, status_code=500)

        
    except Exception as e:
            print({"error": str(e)})
            return JSONResponse(content={"error": str(e)}, status_code=500)