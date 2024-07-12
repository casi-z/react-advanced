import Calc from "@/utils/calc";
import importAllImages from "@/utils/importAllImages"
import randomElement from "@/utils/randomElement";
import stringToColor from "@/utils/stringToColor";
import Text from "@/utils/text";
import URL from "@/utils/URL";
import viewsHistory from "@/utils/ViewsHistory";

abstract class Helper {
    public calc = Calc
    public importAllImages = importAllImages
    public randomElement = randomElement
    public stringToColor = stringToColor
    public Text = Text
    public URL = URL
    public viewsHistory = viewsHistory

}

export default Helper