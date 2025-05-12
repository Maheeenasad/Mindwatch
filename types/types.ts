type ExerciseNames =
  | 'Anger'
  | 'Anxiety'
  | 'Breathing'
  | 'Depression'
  | 'Fatigue'
  | 'Fear'
  | 'FearOfLoss'
  | 'Forgiveness'
  | 'Frustration'
  | 'Happiness'
  | 'Impatience'
  | 'Irritation'
  | 'Jealousy'
  | 'Loneliness'
  | 'Pain'
  | 'Resentment'
  | 'Sadness'
  | 'SelfConfidence'
  | 'Shame'
  | 'Shyness'
  | 'SocialAnxiety';

// Helper type to generate task names for each exercise
type ExerciseTaskNames = {
  [K in ExerciseNames]: `${K}Task${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15}`;
}[ExerciseNames];

export type RootStackParamList = {
  // Core screens
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  Profile: undefined;
  MainTabs: undefined;
  Journaling: undefined;
  JournalEntry: undefined;
  BodyFeelingScreen: undefined;
  ReflectionScreen: undefined;
  TherapeuticQuestionsScreen: undefined;
  Islamic: undefined;
  Chatbot: undefined;
  HealthScreen: undefined;
  Health: undefined;
  MoodTracking: undefined;
  MoodHistory: undefined;
  Exercises: undefined;
} & {
  // Exercise screens
  [K in ExerciseNames]: undefined;
} & {
  // Exercise task screens
  [K in ExerciseTaskNames]: undefined;
};
