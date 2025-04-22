from deepface import DeepFace
import sys
import json
import numpy as np  # Add this import

def analyze_mood(image_path):
    try:
        result = DeepFace.analyze(img_path=image_path, actions=['emotion'], enforce_detection=False)
        
        if not result or len(result) == 0:
            return {
                "mood": "Neutral",
                "stressLevel": "Moderate",
                "emotionData": {}
            }
            
        dominant_emotion = result[0]['dominant_emotion']
        emotion_data = result[0]['emotion']
        
        # Convert numpy floats to native Python floats
        emotion_data = {k: float(v) for k, v in emotion_data.items()}
        
        mood_mapping = {
            'angry': 'Angry',
            'disgust': 'Disgusted',
            'fear': 'Anxious',
            'happy': 'Happy',
            'sad': 'Sad',
            'surprise': 'Surprised',
            'neutral': 'Neutral'
        }
        
        stress_mapping = {
            'angry': 'High',
            'disgust': 'High',
            'fear': 'High',
            'happy': 'Low',
            'sad': 'Moderate',
            'surprise': 'Moderate',
            'neutral': 'Moderate'
        }
        
        return {
            "mood": mood_mapping.get(dominant_emotion, 'Neutral'),
            "stressLevel": stress_mapping.get(dominant_emotion, 'Moderate'),
            "emotionData": emotion_data
        }
        
    except Exception as e:
        print(f"Error in face analysis: {str(e)}", file=sys.stderr)
        return {
            "mood": "Neutral",
            "stressLevel": "Moderate",
            "emotionData": {}
        }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python analyze_mood.py <image_path>")
        sys.exit(1)
        
    image_path = sys.argv[1]
    result = analyze_mood(image_path)
    print(json.dumps(result))  # Output as JSON string