export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string | null;
    strVideo: string | null;
    strCategory: string;
    strIBA: string | null;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    [key: `strInstructions${string}`]: string | null;
    [key: `strIngredient${number}`]: string | null;
    [key: `strMeasure${number}`]: string | null;
    strDrinkThumb: string;
    strImageSource: string | null;
    strImageAttribution: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string | null;
}
