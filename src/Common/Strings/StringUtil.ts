export class StringUtil {
  public static StringContainsSeparatedWord(str: string, wordRegExString: string, ignoreCase = false): boolean {
    const regExp = new RegExp("( |^)" + wordRegExString + "([ .]|$)", ignoreCase ? "i" : undefined);
    return regExp.test(str);
  }
}
