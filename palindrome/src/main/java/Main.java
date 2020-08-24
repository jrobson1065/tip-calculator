public class Main {
    public static void main(String[] args) {
        System.out.println(isPalindrome("Test"));
        System.out.println(isPalindrome("Anna"));
        System.out.println(isPalindrome("Kayak"));
    }

    public static boolean isPalindrome(String text) {
        String reversedText = reverse(text);
        if (text.equalsIgnoreCase(reversedText)) return true;
        return false;
    }

    private static String reverse(String text) {
        if (text == null || text.isEmpty()) return text;

        String newWord = "";
        for (int i = text.length() - 1; i >= 0; i--) {
            newWord += text.charAt(i);
        }

//        String word1 = text.charAt(text.length() - 1) + "";
//        String word = reverse(text.substring(0, text.length() - 1));

        return newWord;

//        return text.charAt(text.length() - 1) + reverse(text.substring(0, text.length() - 1));
    }
}
