import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Image } from 'react-native';
import NavigationTab from '@/components/NavigationTab';


// Content arrays for Ayats and Hadiths
const ayatContent = [
  {
    id: 1,
    text: `اَلَّذِیۡنَ اٰمَنُوۡا وَ تَطۡمَئِنُّ قُلُوۡبُہُمۡ بِذِکۡرِ اللّٰہِ ؕ اَلَا بِذِکۡرِ اللّٰہِ تَطۡمَئِنُّ الۡقُلُوۡبُ ﴿ؕ۲۸﴾ \n\nجو لوگ ایمان لائے ان کے  دل  اللہ کے ذکر سے اطمینان حاصل کرتے ہیں ۔  یاد  رکھو اللہ کے ذکر سے ہی دلوں کو تسلی حاصل ہوتی ہے ۔`,
  },
  {
    id: 2,
    text: `وَ اَنۡفِقُوۡا فِیۡ سَبِیۡلِ اللّٰہِ وَ لَا تُلۡقُوۡا بِاَیۡدِیۡکُمۡ  اِلَی التَّہۡلُکَۃِ ۚ وَ اَحۡسِنُوۡا ۚ  اِ نَّ اللّٰہَ یُحِبُّ الۡمُحۡسِنِیۡنَ ﴿۱۹۵﴾ \n\nاللہ تعالٰی کی راہ میں خرچ کرو اور اپنے ہاتھوں  ہلاکت  میں نہ پڑو اور سلوک و  احسان  کرو اللہ تعالٰی  احسان  کرنے والوں کو  دوست  رکھتا ہے ۔`,
  },
  {
    id: 3,
    text: `کُلُّ نَفۡسٍ ذَآئِقَۃُ الۡمَوۡتِ ؕ وَ اِنَّمَا تُوَفَّوۡنَ اُجُوۡرَکُمۡ یَوۡمَ الۡقِیٰمَۃِ ؕ فَمَنۡ زُحۡزِحَ عَنِ النَّارِ وَ اُدۡخِلَ الۡجَنَّۃَ فَقَدۡ فَازَ ؕ وَ مَا الۡحَیٰوۃُ الدُّنۡیَاۤ اِلَّا مَتَاعُ الۡغُرُوۡرِ ﴿۱۸۵﴾ \n\nہر جان موت کا مزہ چکھنے والی ہے اور قیامت  کے  دن  تم اپنے بدلے پورے پورے دیئے جاؤ گے پس جو شخص  آگ  سے ہٹا دیا جائے اور جنّت میں  داخل  کر دیا جائے بیشک وہ کامیاب  ہوگیا اور دنیا  کی زندگی تو صرف دھوکے کی جنس ہے`,
  },
  {
    id: 4,
    text: `وَلَا تَقۡتُلُوۡا أَنفُسَکُمۡ ۚ إِنَّ اللّٰہَ کَانَ بِکُمۡ رَحِیۡمًا ﴿۲۹﴾ \n\nاور اپنی جانوں کو قتل نہ کرو۔ بے شک اللہ تم پر بہت رحم کرنے والا ہے۔`,
  },
  {
    id: 5,
    text: `لَا تَحۡزَنۡ إِنَّ اللّٰہَ مَعَنَا ﴿۴۰﴾ \n\nغم نہ کرو، بے شک اللہ ہمارے ساتھ ہے۔`,
  },
  {
    id: 6,
    text: `وَقُل رَّبُّنَا لَا تُحَمِّلۡنَا مَا لَا طَاقَۃَ لَنَا بِهِ وَاعۡفُ عَنَّا وَاغۡفِرۡ لَنَا وَارۡحَمۡنَا ۚ أَنتَ مَوْلَانَا فَانصُرۡنَا عَلَىٰ الْقَوْمِ الْكَافِرِینَ ﴿۲۶۳﴾ \n\nاور کہو، "اے ہمارے رب! ہم پر وہ بوجھ نہ ڈال جس کی ہم میں طاقت نہیں، اور ہمیں معاف کر، ہمارے گناہ بخش دے، اور ہم پر رحم کر، بے شک تو ہمارا ولی ہے، پس کافروں پر ہمیں فتح عطا کر۔"`,
  },
  {
    id: 7,
    text: `اَلَا بِذِکۡرِ اللّٰہِ تَطۡمَئِنُّ الْقُلُوبُ ﴿۱۳:۲۸﴾ \n\nیقیناً اللہ کے ذکر سے دل سکون پاتے ہیں۔`,
  },
  {
    id: 8,
    text: `فَإِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرًا ﴿٦﴾ \n\nیقیناً ہر تنگی کے ساتھ آسانی ہے۔`,
  },
  {
    id: 9,
    text: `وَلَقَدْ سَجَدتْتُمْ لِفَجْرِی  مُحَمَّدٍ صَلَّی اللَّہُ عَلَیْهِ وَسَلَّمَ \n\nتم لوگ محمد صلی اللہ علیہ وسلم کے لیے سجدہ کرتے تھے۔`,
  },
  {
    id: 10,
    text: `وَقُل رَّبُّنَا اغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِینَ \n\nاور کہو، "اے ہمارے رب! ہمیں معاف کر، ہم پر رحم کر، اور تو سب سے بہتر رحم کرنے والا ہے۔"`,
  },
];


const hadithContent = [
  {
    id: 1,
    text: "تَعَلَّمُوا الْقُرْآنَ فَإِنَّهُ يُجْزَى بِكُلِّ حَرْفٍ عَشَرَ حَسَنَاتٍ. (سُنَن الدَّارِمِي 3351) \n\nقرآن سیکھو، کیونکہ ہر حرف پڑھنے پر تمہیں دس نیکیاں ملیں گی۔ (سنن دارمی 3351)",
  },
  {
    id: 2,
    text: "طُوبَى لِمَنْ وَجَدَ فِي عَمَلِهِ كَثِيرًا مِنَ الْمَغْفِرَةِ. (سُنَن ابن ماجہ 3818) \n\nخوش نصیب ہے وہ جس کے عمل میں بہت زیادہ معافی ہو۔ (سنن ابن ماجہ 3818)",
  },
  {
    id: 3,
    text: "أَعُوذُ بِاللَّهِ مِنَ الشَّرِّ كُلِّهِ. (سُنَن ابن ماجہ 3527) \n\nمیں اللہ کی پناہ مانگتا ہوں ہر قسم کے نقصان سے۔ (سنن ابن ماجہ 3527)",
  },
  {
    id: 4,
    text: "لَا قَوِيٌّ مَنْ يَغْلِبُ النَّاسَ وَإِنَّمَا الْقَوِيُّ مَنْ يَحْتَسِبُ غَضَبَهُ. (صحيح البخاري 6114) \n\nطاقتور وہ نہیں جو دوسروں کو شکست دے، بلکہ وہ ہے جو غصے میں اپنے آپ کو قابو کرے۔ (صحیح البخاری 6114)",
  },
  {
    id: 5,
    text: "مَن شَكَرَ لِلَّهِ عَلَىٰ نِعْمَتِهِ فَإِنَّهُ يُعْطِيَهُ أَكْثَرَ. (صحيح مسلم 2739) \n\nجو اللہ کی نعمتوں کا شکر ادا کرے گا، اللہ اسے زیادہ دے گا۔ (صحیح مسلم 2739)",
  },
  {
    id: 6,
    text: "لَا تَحْزَنُ إِنَّ اللَّهَ مَعَنَا. (سورة التوبة 9:40) \n\nغم نہ کرو، بے شک اللہ ہمارے ساتھ ہے۔ (سورۃ التوبہ 9:40)",
  },
  {
    id: 7,
    text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ. (سورة الرعد 13:28) \n\nیقیناً، اللہ کی یاد سے دل سکون پاتے ہیں۔ (سورۃ الرعد 13:28)",
  },
  {
    id: 8,
    text: "خَيْرُكُمْ مَنْ يَنفَعُ النَّاسَ. (صحيح الجامع 3280) \n\nتم میں سب سے بہتر وہ ہے جو دوسروں کے لیے سب سے زیادہ فائدہ مند ہو۔ (صحیح الجامع 3280)",
  },
  {
    id: 9,
    text: "مَن فَرَّجَ عَنْ مُؤْمِنٍ كُرْبَةً فَرَّجَ اللَّهُ عَنْهُ فِي يَوْمِ الْقِيَامَةِ. (صحيح مسلم 2580) \n\nجو کسی مسلمان کی تکلیف دور کرے گا، اللہ قیامت کے دن اس کی تکلیف دور کرے گا۔ (صحیح مسلم 2580)",
  },
  {
    id: 10,
    text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا. (سورة البقرة 2:286) \n\nاللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا۔ (سورۃ البقرہ 2:286)",
  },
];


// IslamicScreen component
const IslamicScreen = () => {
  const [animation] = useState(new Animated.Value(0)); // Animation state for fade-in effect
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

  // Trigger animation for fade-in effect
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [currentIndex]);

  // Function to change content regularly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ayatContent.length);
    }, 3600000); // Change content every hour

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
        {/* <View style={styles.header}>
          <Text style={styles.title}>Find Peace Through Faith</Text>
        </View> */}

        {/* Islamic Image Sticker */}
        <Image
          source={require('@/assets/images/Islamic-page.png')} // Path to your image asset
          style={styles.islamicImage}
        />

        <Animated.View style={[styles.contentContainer, { opacity: animation }]}>
          <View style={styles.quoteContainer}>
            <Text style={styles.boldHeading}>Ayat of the Day</Text>
            <Text style={styles.quoteText}>{ayatContent[currentIndex].text}</Text>
          </View>

          <View style={styles.quoteContainer}>
            <Text style={styles.boldHeading}>Hadith of the Day</Text>
            <Text style={styles.quoteText}>{hadithContent[currentIndex].text}</Text>
          </View>
        </Animated.View>
      </ScrollView>

      {/* Add padding at the bottom to avoid overlap with the navigation */}
      <View style={styles.navTabContainer}>
        <NavigationTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Light blue background for a calm, peaceful effect
    padding: 20,
  },
  scrollViewContent: {
    paddingBottom: 80, // Add bottom padding to make space for NavigationTab
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#003366',
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 20,
  },
  boldHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  quoteContainer: {
    backgroundColor: '#A5D8FF', // Soft blue background for the quotes
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  quoteText: {
    fontSize: 18,
    color: '#003366',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    lineHeight: 24, // Improve readability by increasing line spacing
  },
  islamicImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  navTabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});


export default IslamicScreen;
