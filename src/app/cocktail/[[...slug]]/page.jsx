"use client"

import useFetch from "@/components/customHooks/useFetch"
import Image from "next/image";
import './../../../components/styles/DinamicPage.scss'
import './../../../components/styles/App.scss'
import Link from "next/link";

export default function DinamicPage({params}){
    const data = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.slug[0]}`)
    console.log(data);
    return (
        <>
        <div className="dinamicPage">
        {data.drinks? <div className="dinamicPage__container container">
        <img className="dinamicPage__cocktail__img" width={320} height={450} src={data.drinks[0].strDrinkThumb
            
        } alt={data.drinks[0].strCategory} />
        <div className="dinamicPage__info__box">
        <p className="dinamicPage__category">{data.drinks[0].strCategory}</p>
        <h2 className="dinamicPage__cocktail__name">{data.drinks[0].strDrink}</h2>
        <p className="dinamicPage__cocktail__overview">{data.drinks[0].strInstructions}</p>
        <Link href={'/'} className="dinamicPage__btn">Go to back</Link>
        </div>
        </div>:''}
        </div>
        </>
        )
    }