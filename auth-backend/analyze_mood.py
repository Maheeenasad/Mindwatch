from deepface import DeepFace
import sys

def analyze_mood(image_path):
    try:
        result = DeepFace.analyze(img_path=image_path, actions=['emotion'], enforce_detection=False)
        mood = result[0]['dominant_emotion']
        return mood
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    image_path = sys.argv[1]  
    print(analyze_mood(image_path))
