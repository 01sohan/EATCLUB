import Restrauntcard from "./Restrauntcard";
const Cardconatiner = ()=>{
  const restaruntData=[
    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
      title:"Chinese Wok",
      starRating:"4.5",
      deliveryTime:"40-50",
      cuisines:"Chinese,Asian,Tibetan,Dessert",
      locaion:"Santacruz East"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
      title:"Pizza Hut",
      starRating:"3.9",
      deliveryTime:"30-35",
      cuisines:"Pizzas",
      locaion:"Phoneix Market City"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e2ej0ob56z47oylq9mkb",
      title:"UBQ BY Barbeque Nation",
      starRating:"4.0",
      deliveryTime:"40-55",
      cuisines:"North Indian,Barbeque,Biryani",
      locaion:"Bandra East"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/53f88d009d0528792249fb282ef2e17b",
      title:"Dabba Garam",
      starRating:"4.4",
      deliveryTime:"35-40",
      cuisines:"North Indians,Thalis",
      locaion:"Bandra East"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399.JPG",
      title:"McDonald's",
      starRating:"4.3",
      deliveryTime:"20-25",
      cuisines:"Burgers,Mac Meals,Fries",
      locaion:"Ghatkopar West"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c99751d54e4e1847186c62b3309c1327",
      title:"Big Bowl",
      starRating:"4.6",
      deliveryTime:"40-45",
      cuisines:"Chinese,Tibetan,North Indian",
      locaion:"Santacruz"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
      title:"The Belgian Waffle Co.",
      starRating:"4.3",
      deliveryTime:"50-55",
      cuisines:"Waffle,Desert",
      locaion:"Powai"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7aeb2bbff29d99d6e986240911ce0e71",
      title:"Persian Darbar",
      starRating:"4.2",
      deliveryTime:"40-55",
      cuisines:"North Indian,Biryani",
      locaion:"Bandra Kurla Complex"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lkpasnikcdavv852pwls",
      title:"Natural Ice Cream",
      starRating:"5",
      deliveryTime:"20-25",
      cuisines:"Ice Cream,Desert",
      locaion:"Ghatkopar Patel Chowk"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fvc0bn2hdmdqpcynfvdz",
      title:"Zaika Restaurant",
      starRating:"4.1",
      deliveryTime:"40-55",
      cuisines:"North Indian,Snacks",
      locaion:"Andheri"
    },

    {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b125bc1d2ebe5f5cfa217c075f96554f",
      title:"Dine 303",
      starRating:"4.0",
      deliveryTime:"45-50",
      cuisines:"North Indian,Chinese",
      locaion:"Ghatkopar West"
    },

        {
      imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/78ed2991b24b1bbc00dfb122d4dcc585",
      title:"Spaghetti with Basil",
      starRating:"4.2",
      deliveryTime:"40-45",
      cuisines:"chinese",
      locaion:"Andheri"
    },

    {
      imgUrl : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/qidrkxgwox9t2xidfdxs",
      title : "Urban Tadka",
      starRating : "4.5",
      deliveryTime : "40-45",
      cuisines : "Urban Tadka, Mughalai Biryani",
      location : "North India"
    },

{
  imgUrl : "https://b.zmtcdn.com/data/reviews_photos/801/6e42f1bfa8397d7105d9bc1276205801_1680257479.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  title : "Kubec BistrocBar",
  starRating : "4.5",
  deliveryTime : "40-45",
  cuisines : "Chinese, Asian, Tibetan, Desserts",
  location : "Powai"
    },

{
  imgUrl : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgaGRcYGBoeGhsdHR0YGBoYIBoZHSggGB4lHRgYITEhJSkrLi4uFx81ODMsNygtLisBCgoKDg0OGxAQGy8mICYyNS4rLS0tLy8vNS0tLS0tLS0tLS0tLS8uLS0tLS0tLy0tLy8tLS0tLS0tLS8tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAQIHAAj/xABDEAABAgMFBgMFBgQFAwUAAAABAhEAAyEEBRIxQQYTIlFhcYGRoTJCscHwBxQjUtHhFWJy8RYzkqKyU4LSJENUc8L/xAAaAQADAQEBAQAAAAAAAAAAAAADBAUCAQAG/8QAMxEAAgIBAwIEBAUEAgMAAAAAAQIAAxEEEiExQRMiUWFxgZHwBRQyobEjQsHhM9FSYpL/2gAMAwEAAhEDEQA/APE9Y8YyY0FSTDElTxEexRmNQI5PSUGN0iIwI3SDHp2SxlKY9LSSaBzyja0z5MhOKaoOPdf6J7CBWWqg80NVS9pwoksmUomgca9O5OUYmmRJdUxYHQFv9x/SFS99rZiqSxgTVic/BOnjCheF5Ld3KlHIqLn9hCTal3OE4lJNHWgy5zOjztsUJcSZWLqzDzVXygVadpLQt3WhD8nUfNX6QoXcqY/4hNdGpByyXetYJSGSPeNB+57Qna2P1GUaqxjCiQXjfSwOOdNV2LfBoGyL0XNXglomTFHTESe+Z8zDZL2WStt6cVahJp/qBr4Q02S6pUhA3aAgnkAKUY9dc+kJ266qsEAZP0EZFDHGeIs7P7MTJswfeAlCQkqKQp1EDR8g5IFCYkvy5lJTis6FOKkieoEDokkPzzekEDeSeM4sulQ365+Mb3mmzYCoTVPklSSQ51Odf2gAvtLAnj25xDNQBxEb+OWmUWK1pI0UH+IeCNh+0SciiilQ1YkehcRvbcFqTu1k4gGTM1DZPzHSEibYVInGUsMoFjy6HsaeYitp2WwHPBESvrKH4zqd37X2KaXmywhZzWAB6pdPKC67pkzwJlnmgL91VH5sVCih0MIN07LSyoucQFXDijPl5iLNo2XtNmRvpU0pHwdgH5h2DkFtY6mqUNsVvrFrdEu3eRj4RtRvBwzUFCwWPI/zJPvA9PHKKl4pWSkoORr8HpAe5vtCmI/CtUvGnUtXvhND3SYcrIZFpTjs6wf5X9HNR2MPV3Do0mWaUjzJyINlWUBWNVSMjkADyEWPJ4mmSykkGhGhiLB1hrMTM1UI1cxuxEaMfrSOT0yCYklrHOIZrsw/v0i1cllEyfKlkOCqvJg6j6JaOHibRcyx9yX/ANNfkYzHSMUejGTDeAJxhZjZGTRg1MZTDERmTGWj0bJEcnZlIieTJfoBmTkIxKluCTRIzPyrrAW9r1VNdEvglihOp6D5ny6KajUivgdY9pNGbfMektXpfgQCiSHVkpRy8SP+IhStU0qOJRKlcz8hpFmcAkVoIu2O5lL0pE0Eu2TLJUVrgdItTUnOCWz1zBU1BWCVKIAADtq2eYDmCl7WJErCgEEsFEivUfr5c4DWy2pDVJFWHVmfu8csYk7E+cSdyWwI8Xps7LKMSAAeQ6aRZu2xjcgBLJ6t5Zu45wkXPeltnq3aF8AzLCgPhnHU9m8IswBzQDVndmD5+LxLtqceRmHrKuntbbvxKUmy0rQNm+kQ2c7yaxLJRnQlycg2RHOIb/t05P4chIKlFiXogcu5p5ZVi1ddiUlHHhfXDibzUSTr5xP/AONd7Hn0j/8Abk9+kEXpdQAmJl4UOQzZZ5sDSKlm2OBZUye7aBLfOJtrZiLNKxpABUoJbEae84HgY0sF70wrBBo4ND+0Mq9wr3p0M6fN0MNWK5JSTiS2lWHwyhQve4fvF4TihTJlIS6y5TiSlI3YIDFVUhu8H5tqOHAmZgKyEhWbP5dvGCt27OokyzhJJUpSlVoSAQVNkKJ5aRui1q1Z+pgLU5G48Qbs9disTK1NTyDE18UnziTbW+USkrCWUgADCTRRGY8aiDcmyp3U3FlhIP8Atbpz9YUryueVOlqmTCo4eGWlJYFRo55gfIwXTKbGXPfk/AQd1igFj24+sDXhciJyJU3BwKwkKBJUMZyIFCskKDOcogtNi+7lM2zTClQHM8WuudDkaQZY/dptnxB7PMCiEhsTky1VBcKBLjkcs6hrnvQS0qkWjCpJfCSlINMkgCpGdTrk9YrWhyAydu0laa1AdjdPWMtwbXy7QEyrSMEzJKxkToz5H+U+EGp1nKWq6TkoZGFiVctmUnehLgpJGYGRAU3f1FY9ce2AlrVItABlEslX5Oh6O9dI7pdbltuDj37TWq0KsNw6w5MVGjxavCQUMpPEg5F/Q9fjFXG30IrKwIyJFZCpwZoZjFnrz+u8H9jA9rHSWs+qR8zC4lxm39v7xf2PvDDectByXJmgd3lkf8VRxukJX+oCdOjMQ7+PQOM5nITmY8kxquMiGpJkqYnlS3zLAZmK8pLkARXvu2lIElHtHMjOFdTf4S8dTHdFpje/sOsqXzegWTLSWlpzbnqAfNzAJNrWo8AThFA4/SDM/Zye2HCwo/QdtYLXDcwSlSVFJIP5Q5cA99fSIL3jtyZ9SlQVfaAbJdalccyv1kBDLZpmGWJeElk5J1/q6afGLNutEqUhbMQkVURXIOACOEu48I54naWfvlKlkhKhhYa1cDm8CRbbSQp+P/U9ayIm4j4QhtLbHnLozMnTQMRTrTwgdZLtM+UqZQHeCWgA1UaFRIOQCS9ORjC5+5B38vfJUwUXIKVFyVAjXOhzbvGLknHGgJSoSyWTiZyTmosGeGgpSvK/WRq1N12T3jvdN2plygiWllLo7k5CqidBr5eJu4EFEndlSlJSsl8nejEjR+XKIBb0SEYlslIDYjT+/wC0DrrvtCgcCnSSWOT1JetcyfSJG9ypfk568fSXlrJG0dO0uXXK4lKKi5NQdC5hgs89JD6dYVbxtFMQzgQdo1pSxI6QuKXtbeOsK9e4dYf2rscmeGmAYR4UfEUuCGqB4nqXXEWyTakmWlxMlgYFn2ijT+ogliC70OsR2W/TMWxYoB4u2vekELuuWzKmpmoC8IyBoRpQguR8cofXNabbTz2mAm05EWrfa1yzu5wZiCFpyPIx0G5do0rkpQfaIVhbUkGnkowubSB0KlzJEwlHvpS6Szl3FU0BoRpCXdtvUEKCCxBdNWbUEdf1hhaTbWGxg/tzOM6sdjH4Tqd4XwEWdYGZIHi6qeZHlAG+kbuzyymZiUk4yGLHmCQXq5FGPJs4o3BbErwiaN5xgqGZPM17mGm+bNZUyiUrIJoEqLnKpHSnTOAovhHHcfwPSZtUEbccGc7tN7SVGUUjd4UATaPiVUE/zEg5gAno9JrXY0zDLmkVWAyScPCSoMFBywKFVbUMxhYvKYnekPRzkMmdqvV84kl3upBBAQoCiQsYmZm5FOhDNkxcOIvhTt4nzpGG4nSbVfslEgITKTJRKSlJViKtCMIBzLhupI5xz0WtK3wpU5JJchgK8hxE0OjdYp2q85s4EKUAlSsRAADmuuZzOfOL0u7imW4GjnPXmND+sCFKVA56mN1m18ZPAjnsVtMJf/p55xSVUST7h5P+V8uR9Gm8LNhLAuk5Hpn5xx6ROL5dOhjo2x98hafu80nLgUc25PzHqHjVdpqbnpM6jTixcjrL60luR+vjCva7zNmvCzzn9hSX7EkEeRhvtMspJSRUZxz7baX+I/QQ+3KyVXkPzO5/4ik/nEej5w/i8/8AOfIRiF/6nrHcr6TpyjGUxqTElml4lAc8+2sOlgBkyQqljgSbe7tBWfaNAID2CzFUwqJbDxE1d6MA1Qfg0MJsJmgqYMKJrSM2m61SUjKoNRzpHzGq1XiFmn1ukoFKqk0sV6FNCaMaa/t2jS6L3AnzEgsVILddCPI+kKd924y3D8UUNn7SoKM8uWSrxJoAH5mnjC1WmO3xPpHbGQeWMG1Czap6bNKByxTSKlhXTm3pDrs1sFZVIQuZICS1GKgT1LHX5xT2KlSpUhK5ykJK1FU1aqYsTlKR0KUpocgkDN2ZZl7GcSLNNQAC2LkGelC+fSGXCUBdxzjsO5MkYfUMT/b2lW8tkwqSqzyWlJWWJPFRxjLEl3Aw9H6QGt2yyUKQEyioyzwqDsEgaDJ83Jd/CHiy29DYCvERR6M40eFvabaKWpBTJIM4qCAGqBqegAevPvAnatUIQ9evx7w9SvuAxETa6zGYZOJYTL4En+VxiKm1BL15wvboyVSg7cxpTl0hntkxCsQNSGbm6ag+DQFm37Ol4jIQouz/AIO8y7ggZnT3jGtMxdQhHEphxXyf3OJLet6hKM4R7wvVSyyf7xm+by3gSkAhqEHPy0iS45CDU0PLn+kP0adaE3MOZP1Goax9lUMbIrmIU6pTp5lv+JLmOh3fMS4AYd3+QPxhVkTUpSBiOH8rN6uX0zghYlrnFSQcCEoUokAA0BIdTE5gRM1Ki984hUNqrg/4/wBxxnWxCwQWUWAUkEMtgzgj3moXz7iOP7S7PTJc4pSglLnD/Tmk9mPpDxs5KSteHHxFzUs5z1+soIGWCWVUuz5n946ureg8jM2aFbjM46DNkl0lSCOXLlyMb228bRMHHMWoeQ9BHWLTcUkTCqaAUJBJDaio+B84RLdZ94sJk8CVTCGBJSCVUCQkHEE46q/qY0BNKjUJd5iOREL818A8GKs6a8sDCA3vVc/XKIpMomOxXx9j8rdDc2haSAoqVNS4UwLUSAUF2fOmhOaDZ7hmS1FExJSpJYgg+YfMHMHUQz+Zr25BgKqSTzI7muzEpIwvHStl7nRvDLUHC5ak9QaKdxlRJgTs5drVaGuzndKTMTmlQP6jyeIV+v8A6w9BKgqAQgdYgbWbMizTWCgUn2R7wZs/P4xQsaFCooQQUnkRr5w87TXQu2WorQcwkqOiQ3zOQ5kwLnXVujh00MPq+5dw6QBOMKesOWO3feZAXktNFDWmY+Y6GE/bCzOAroR9esGrqn7maC7IWQlXf3Febp/7k8o12sshCVAZe0O2TeFYoaW3I2H5SVrKdrCwfOc03Jj0Ftx0j0M7YDdH0pizKdKSQ2Ilh88tMorFbVH1TryeJbwm7tI5pDeJr8iPKAfiFmyrA7z34ZVvu3HtKVnvBap+7BISlsXh+uUGL/vwJSGq2kCLmu5W7Kx7SyST6NAbaGWtBY1j5wU7mx2/mfUEjOYXmW+xEbxWEK1ChxA8sq+EL14XobQsBJwykEMAHKjUuRR2AduZTzcCrSSRBvZ1C5CROISkysSuOj4+EHqQ8vwKsmq9TplTzZJ9M9vhEtXedm0d5pa7wWtaJaipUuWoeylSk7xdWID/AJVIH9B6w62S5isp3kzhWSU4KAPoVjIu4b+UZwi3ftsqRanCcQLCZU8XCAwbKoDdOkMipkxUw7uzqw4sW7c4atQty6fKBautgBxj7/ae0h2jAaFr2vn+H4UIQhIUyXWsZmu8SkF1jmXzz6CLxvVEhKiUqCzUqUGKnq/r6wt31dCkTpiFrCikFYZRUEFSwBKKjUkEsexgJbksAkrKpilAqyYAOkDnq+bMAdaEr0CMoBPx95x9ZsJ9YTn7SqlleGXxO4JUMudA6qvRJDNF25NsuEy148SgoEJwgYVBRK3bHiBwYQSRQlzQBWZcwpSgFpSXxUoBUnr82gjaVoTgLErXhSSogqagqWyDAN0brFBqq0GAvMmFmdsk5hVN8yzSYlKkk+8nE9eSkkZ9RFqxCwlbpQlB6LUnxYhQHZ4B2Pd4jjSFDErMCjknl3gza7DYiAqWhUpTe4pTeS8QHgIRsVF8vmGfTpG69JYRuQ4jHLu6XMZlhIOqhQ9MQ4fWDNgsSpSsIRVtKuOdMwekcmXaJko/hTVNyP7UPlBCzbYT5bELUCBkHFaUAS6etWygLaF2wVbM34+oq8rDP37RpvCxLROCzLmjC6AtiDhJd3YVcZ51hinJCES1h2KMy7uKHOoLvToKmOaW3bu1rKPxFAJIJS6SFEaFg7NRusMVg2sROSMYQCcxiV8FEiMarTWBORn/ABCLr/VfpD1vsU+1SlCQkTColJAWElJ0KjmB2eNbF9llpO4XMtEpO6IUEISogMoEjGSKlg5w+EZui9ZMlalyEmWSACQUElnz4epg3Z9sghZUskkgcLKHjmRl0jFFyVDbg/feBfVeK3Ax8oQ20kTkysUtRZJdUse8GOIFWJgMzXlCPPlzJswzJiChTAAK1AFDyr05Q4Sr/RMmYlE7sigBepPJQAqKeBprAbaG9pctCeHNmKUnCgV4TRuXjAGs3E7esbouQgJkZlewpCA0W1KfKFS33opLMaGC1yXjjTiVzzb9IVs07hd8oGogbp0W5igSEAAcXCcn5Du0AdpbpZ6dRGuziN5aUcZCUOrC9CaNTL+0N96WTGk8xlH0P4cTbRkyHqR4dk47abO4UhWRBB/Xvr4QSffWUKUBjQ6F9wcK/B2PaLN92QIU9Of6xTuWcN6tHuzE4vFLIV6bs+cEB8Nh7Qjp4lZ94B/hI5qj0MH8GX+YfXjGYp+NX6yN4NsoSkOtIcllDXSjvziHaafhSgn3io+TJ+R84s2EcYI0BOjZNl4xU2ykBMqTMLskEkN0ST6mE9aN9m30H8x78NISvd6n/Eu7Jz5iZRUapxezycf28oztHu5iXAOIaN84QP49aSMMuapKOSWYP4OfHrBO778KgmXMP4uQUS2IZ+B+PeJ92ndOV+Y/zKdFyWN5vrDEuxSvu9oGAY0sedGox5OD5wMstqx3epLJG7U2JqlwtyT2Qn/TFiZeWEFKnD/VRrQ+sCrLNlpxpClSwo5gukvzBfDqOxIyJjlJOGz3IM9qtMXxsPSK9vTgWCkVauoeoOfhDTd+39pRIKErCVJASk+8zJGetAR0pFmfsoZqU4VIKHzT7QFAwfhYM7PrFBWw1oSaYFDnjSPFn+cONbprVAcg4iKU3IekitO0FptCFGcrEl0pASAlKAMSmAA1rXPhzgOpIGKqiohiSS7ginPIN4CCFouG1JP+RMIJbgGOgy9gnnBC79lZ5ZU2WpDniExQBUHJdqqfIVbXWCm2tFzkYgTW7McAwfc93qUnEVhKUgqdSmCQclkEgqyyEdL2auu7jYBPmyhMWvHhUsDG4JQlKWqn2XHckwIk7MSTWbOWrmmWyE9EtUkCnlBJcmTLrLQAR0+fhEy/XqeEzmPabRNnLyewbOSEywoprRRfVvaHxbq0Q3rcaN4lKU/hqSSFJyxAtXlo3QxesN5NLIIfCSe4IfM0cl4nXPKUhKxhUEjMNpyMJ+NzHEQqYm3vs+hKThLmFU3XMUrClJJ6Q73tf1nVIQgNvUrVjWS2GrcVBiBDMzsx7FVvDaiYkncYUpLjGHKj/qAY+EUNP45GMfWDsKA+aVL0uBchIVNWlKjlLd1NzI0gzcFnkbtKpiQFAl/Z4qkigD0DZkwvXdIXaJyQtSlEkYlEkkjufKOw3bcEjdJBSGTTlU/E0jWruKqKyefacrUfqxFO8Z9iCeGUSs64lJb+ahY6Zg5mFa1XmpMwBBISdCSYcL2t92ocYwS5DJckMWILD+8I1+WmQVAylEjmxDebRzTAvwVPzEHctfXiF5W0i0kBRBp9VgvZNoQrmk8wX9I52iYScia5xdTImJYhKkvk4IB86GC26Go+0QNCPysZr6teLCwBTxMBQOWdTDVhFy4ry3YwKTq9SWHQgBz1YxW2Ysy1TMc1JwJBdxUKCVLFD/8AWYPqstnNSVAlmCUvkwJLZDmW0hW3AArIzL+jbbUBZ2li77xmAma+FuVBTk/UR1Cy2ybMly1hSMLDGvVx7QbSkc7G7qoMuVLlu4DsouEuRqAk5weuS2qWibukKUlQH4YAdJPD8E1hdWarpnnsP2+XrBalVt5wBj1idteoi0qmJyUon1iO75rTZah+cDwVwfNJ/wC2CF/3SsOhaeJIcUrz8B06RQXY1BAYMSlx3ALeojWnfIweveNapF8NSPSO+66esegP/Ffp49Dfij0kjZAt1zA620Qfj17QxX/YQux2g8QMqStQKWcMAfeYMwrqztVoWLqYGZ/T8xFr7SdoJtnl/d5ZCRPSsTC1cBZOEcsVXObCKT83Nn2k2njTrj3iBZJyMKmSAkJIUValROEJZiDR/CtKGkuSqUrFPSAcNAP5hQnwfyaL12Shu0BWHimlTnJKWSHV4ods8ucE5N3UEwNOlqUplzDxjC7cIVjCSNHq1HpAXdVOPv6zfIEVv4ushlHEBkdRG0uc8E7XZZSUK3eEqoWKFB8irCOLEASxfQOTWBd52Myt0cSSVoSrhILO4wnkQYIoVugxCLew/UYSu+3qQfr5Qy2e+0t7A8a/GEOTa3zgpZVvkYU1GnB5IlCnUE8ZjaNplDhFB0yiCZeq1amBKbKYYrDdaaOYQsWqsZxHFy0s3WXFYJrsZKSR8+0b2WxpAoYI2Sfgy8ImmwF/abJI6Rbss2YgkAauQzhgxBPLMwWTegMpSVpM9JSeAqYCtWKhixcsJpDHYLRKmuVI4qeyHI0Hzp3iLaC1ykoMvdJSCzKQMJAao6g18DFAVoF8QNFzaS2wrEjY27pOBcuaxMwVJq3IGj9PGKdv+ztGNSETN3kpvbABdmLh3r6RBbLSJa1LdYFRwgEYmoDWmleXNomm2uZgWpjiKCEsWfGnCCWrrBN1qncrdfvpOWIp6c/frFO656LPaVfiBaEOAoChajgecELy2qmzpSpe8Iln3A/N6/GK9p2Nmy0JJUFEjIA06VEVLLcU9CgpUlSkA1LEjyAJ8WpD/wDQdt+7J6QAa1UxjiQ3Ps/PtKmloOEZrNEgfOGdGzNjsh/9YuYubmEpQrd05KAZfmIlTtSoDchG7SScS0itcm7CtWdoFzpa1HEpUlxxArPt9wAXIyZTAZc214ljdeBBeGq+8JHaaQk4LNZ0pBoCQQa69mgNeM+cZgUuYmYUh1JBfC9W9NMotzpClpEwyZQUHOBHCeFy6k90t6RSuy7/AL5NUUzt3OABPCMGEMk1Bcq6M2VdY4oQAsfmTPM5BAH0l+RtLiUhK0BKaYiFFzoC1AwDjnXz6Jdd5WREjhmy0q4iogAUqr3fAAfRVbJsxZpLrnr3yyGAbCgcyzkqPiG5HOIF3DYipwFDoFkDzIJhNr6Q/lJ+Q4jiVu64Ih7/ABAm1ImSUEy0qc4lkBwKnoCQG8YedhZf+aos5TLdI0oSfUgRx+batxNEuRZwkkgCYoqXn7wcsGjomy1oWlcpLgEqTiVzcgEN1eMCwV2o/XPT5z19e6oqOI92275c08aAWyOvmIWL4u1CVsEgACnT6eHLWAu0EvI9IsvUmS2Bn1kdLG6Z4nFd0vmY9DH93PIR6FfBX0je+DLmUMak85Zp2KfLOIPtas6lLsiwKLSoHoeFQ/5ekQ3bNa1oT+ZCx4ti/wDzDxftzC12KV+ZABT3SCk/CGbeLj8IjpxmhfjF1OzcpNhWlScUzACk8iPlHOZFqVZ56VlIUEZJVlyy6PHUb62lTIlGWlGNZADkslPf83aOZ2mWJpKlrSlT0GQ6l3p9VhLTOW/V0j1tYxjvNE3wEoqlO9LFMxBIKfDmPNj1iteCjMlS1u/EsGnve1m3JXoeUFFXElgpBxMx4gyTR9DQHmDl5wZuKxIRJmSlFllaVpLAgKDPkTQgZMT8IObqlG4dYqajnB6RQRYXS4ByJyLUzNKfKMG75o4glVM84eF3atJWVJDYFEtQusVKk4E40lz7IcYsixiOzrlrWEl0ywMSkqfCmgdvaASfaBA1y0jh1B7RpaFPeLEqyWxLslXDU0do9ZdpJ6ToW7wxfxMYpkpASVTGlCZLxhJA4XQxdnD5kFy8Db32UmyKqBqTVszmaaZ/HlHMo3Fiib8642MZLZ9sFj2gW1asX5e0xV7K4XF3UvdmY3AFYcWhUz4e7VgfMlqQWOefnA/ylD9BCrq7FPPM6BYdoVJWCFZdfg2VREe1O0qhLz4luM3PUnlCUFTAkKEVFzytWJZJ5chHk0S7s9hOX6wbeBzMb+aFYnUCdef6w17I3kJkwS5hYkjPIt8+kDLnSJqkpWBhYhLAJBIajgVNQ5NaiHCw7A7w4sWBIqVa+Ed1dtX/ABtwe0xpUYf1M/WdBsMmUpJcChz66O7UPyhU2j2pk2ZS0p468IT8HyA+ukZmXIsjAmbMWBRyT9eZgdeWxJUhgoFf5XDv10ESqhU+FfkD0jhAXJBlb7yi0oC1SUhRIcgt5mjip+TRJYbCkKOKTLDEe4kBzQlsLtpR/wBSNzXEuSgb0JUQwABLJObhmcvzDUgnIsDH2UAKNWoU0DZmuR18oYB2eUHiYOCczS8LTLmhMlckYSUhUwHCFKDVUXClUB5Egs/MNP2Wky145ZUkqSfZyOVA7vVvPpB+02MHgRMSJhChj5flYPhUR+VhpARO0KpChJtksSioHBOQAZKx+YpQSAcnCcvy6wavJBC/SCKqCDBpuW0FykFTc3SryV25wOtl22oV3S38O75u1I6Gi3pEolR4FZLQynb8qhRRZ+Ehx8axtaJzpTNSThBSpOEnoGU7AECnXzwHCnpDbnnP7otSjMAWXIOR0hvu68nmODkRh8KiI7ZZ7OsKxoClHFQJYkvwhJd8xk/xYULFYpqCCZagaUz7VFIBqAjDcODDVc5DTudhtiZoCk6gFu8U7+FBATZG1LdMs0ID+BLEdw/rBTam0YR4fAEmKun1Btp3HrItlOy3aJzX70OQ9P1jMS/wtXMeX7R6AeNG/DER7Xat3aZczRKkv2JZWfQmOx3FOH3dQJHAT5Go83McP2hLqPaG+6dpGkSCpTCZwrbPEgFPapJz59Ie1WVYOPcSZogGTYfjLc/Z1SlFSyAkal355MWLVgXbbDJClIwJqQUpKxiaiQCHZ2OLOndncrzv4ykolSk75ZS4B4uHRRUos4A/MCSk9oVbzvCzqQkhQ9o4kzUHGlgWHEkvn7I6VIFJSrxlcyvn1g2Zs8jETLCgp+FAKgTrwKbTOpy8HGouOYhbJWEqAcOS9CzHhcEZa/reK1S+NCShKkk4klKSEuyThSaio9rMvwwOt8y0zz/m4wAVpAAHIKqMi51zpDCb+5GPeDtatRkiXpEyaQZZVu0cgBulq94KcAqriLHUCKgvpVnmYpK0LQoBKkFLhg7JwrJNMwQ1XoIXrYJiTxJIoM3ipjWaPq/15wwlA9eIr+ZQfpE7Ds1JsqVYwhlM75sTU+Z6wy7QKROkEJCCEJck0bqzv4OdI49s/bJmDOqRkzukUOfL4doY7PtCmjjiHp1HKJliW1sR1H7xusiwBuko3rLUUSwxCEuQP6quepbvSBW0+DfSmFNyjxIcFvIQ8WO2y5qFhdSoMCySwzA4gdQIH3XPEoKBDql1SdCk0Ka5tQjsY3XdtGevtDeFkYiH9xtS0tu14dHDa+ZhmuL7PJsyWZswhCH1+Q1htkX8CUlLU0YQWtV5GcUY+FNHIdkjUsHOVdYy34g5GMYPp/uZGkxyefv0ird9yS5SkS0+4VEvzpU/vD3KmfhgVASeVCc3HOEeffCEOpILAsVqOTEvwk0qTw6OczAq2baLJaXLGHLEolz+kKvTfcxPXjEaNaooHSPd53oZMpaksCBQkEt1YCp9OcUJd7rIUV4RhZ8A4S4Ykh+b1PPN3gDddnn2z3lIQXxcRJyZhpBCfsnZ5NmWqaidPUAcCEzcAp0DDN6+kaoCV+Rm5+/lBXKByOZfl39vJRUoYSFPwvk5fPN8JOdKcmggqeiekpRNUiYQKApIIb8qnSH8DHErut60zSpBI5jMBOg9QPGGux7QyUsoHBMAILmp8dQxYD9BFOyhhx1iSXq3I4jvbbOrdtPEtJSAx3gCm0YkZ9CSH11hft1rsa07pSlzKe1MKlOaigoErAJqB4mBtgu2Zbl7yps4UHNQpTaJenIOSBm0F7PeEqwTVy1yF1BSkgpJIIBqXZ/Vmd4AKtvAPMPvyOkrWW7V2aUVWKcuaWBKC2FTElQVLV7KmbDqWLVDxLdW1VntAD4ZM8FwVey/MLzQ/JTjmYhRb7MuSVykBEx/w0lJONSVJfiriBDcJrRwxeL52fkzgVrQneTKuAxCc0invczywjSPWXIinxc/5m1U9o0XfZwdBjwhywcjn1HXVnrFyagoAU0I0izWyxB5TzpIL4FvTnhWCMCvEP1yhhufamXaRu3aZkZa2TM7CgTM7cKv5TCFulLgvW2f5mifXpLVpvRKSCCxIdLFjQ1btG9qvYz5ZCqqDJJ5hRCX7s/lC5f8gHDhOEpUW0Z8wRmC7RLs5MK1EKIOFiWI0f5Ex3Ss4IwevBE9bUoXdGTcDn6/vGYXP8YWfr6x6K35dvSTvHX1nPb+TXwjGzUlNoRMsq1MX3ss9RRQ+HrFi/JeR7wAsFtMieianNJduYyI8iYpXLuBA6yZpXxgx2l22ZYxu58tW8LKRMxPiSPYYnQVp1IiOZeW9UXSUJIDqDFRrqAAAOoD0GcOa7sReVj3aSN7LdchZ1BYlP8ASS3ZxyhBsllWhRQtJSoFiDzFInipW80qm5l4lS9LLiAKSp0jirQntyrF7Y6Sd8hjxEkMciDmmv04EW5ljPLRm+EDEKXIUThJTr0bUQN1fbsmbMWDIhnbi7AtToUjEzFz0zgPaLss4wEKCWSMYcHEWDsM2J5+UevG3ItjAEonaULEa611zy55wFvWxKlgYSqmdfr6MD06MEFbNgxb8o+CQeJdmWxMq0OhaVAkEACgYNhPNwKmlYsbQIlumdJ/y5nu6y1+9LPi5B1HaFgElyST4w2XFdSZkhlTCd4KjQflbqOf0WLQtQDE+0Z09b9B2gyxW8pV7YHcloJSr1SpVSOT6Res+x8gNjUovzWAnzYGL8q4LEnhVKKlAtRSyP8AUFM3WE7NRpzyAT8BKNe8dYLXNTZ1BSiyDkWLdqPDlcd8WKekpE5O8SHqWp0dn8OcLNrNlUdxKlnAKE4lGuqhiJauUJN6WBciaUpJoXChqMwofPsY7VTXcfN195nUWOgBHT948fw8TlLSFOAtXxzgjdmz0kLMpdcCiSR/tz0PyhI2QvwotCUzDwrIBJoxyBMdDvRaZa1zAoOsqcPoMvifKBalbKW25+E2ly2rkS/LnS5CeEAcwDl0f9oUtpdqy7AhhpWvlp+0Br82gI4QeI5frCoqa6nU55vr2Mb0n4dk+JZFdVqAo2p1kybVxcACR0jFntYCVYg5JZtfUfMR5a0FygKAADhTGtNR1ejecVKGLQUd5KzGiw7bTpCBLlk4U5JcYcv5QDnV3fvAu0bQT5inUt+IEAgFIOlCD5QHUmN5KXIEc8JBziGFznjMeLvtAWtE6dOUpUsAIQGSEtyCaAdNdYabDeyMTvHPJYDPFmz2lsjEnU6bxeSZWqsCjE63Yb1AyOefWBW0NwSLRxIAQvQinrp2y6Qlyb0UNYJ2baA5GE1quq6ciaKgnIkaL/nSlbm1o36EsMWU1ADMQqrgclOO0GZIQqzTzYfxFTEMyWTMSD7RKH5apJFNHhftM9EwqUsF6+yWIPSheFmVeZSsLQTKUCWWl61oS2RHSKdS+JhsciAtcKCp6ff3/wBxl/hy/wAqvL9o9Gn+NLb/APMR/rV/4x6G/wCp6ff1iHgU/wDl9/8AzNb1lug9Kwp2tFYc54cEc4VbdKzh15KpMcvsv2iMsiUo1lklPVB9pPhp3HKOn7QXLKnJFoSlyQKjrkT8I+crHaVSpiZiCyklx8wehFPGO+bBbRomS0j/ANuZkD7qveSfF/jrCTDY3PQ/z/uU1O9eOo/iV0XG6aiohP2gQMapIFUtiLU5tHchY0FLANyMcd2jkbu0Tv6lue5P7esYvOwDHeE0w3sc9ouyZctJGGUkLJHFV2rTNteT0HKJ73uxc1koQpSiKJSHJy0EDZaXJUSeGvSkdh+z+yKEszJiMKlgBAUkhTVcsagGlG90HURNO4OGzKNhCpOM2XYq0qUpE1JkKCQQJgYqfo9MtYuJuy0WYpCgSCMwKZt+h8YubQXvMXPmTXIxKLDkBwpHgkARRs+1c1AKXdJzBgrvdZngEek9Wi14J6zNuta01LxBIvs84xbL5EwMRAOaoAuMo1VSGXDLzNtcQeDLAtyUEgKJrpr16RtPt6pww4Aw1zPnA7EZhdvKGC7rJhS7ZwewJXyRzF1Zn+EX58nDF1V9zihKCpwkEAnNjoTq3zje8kvEd13SucpkiCblZctMbWB8sEzZZJclzHlTyzUaDN62EIZIqXKcs6v84Fz7OU0gyOGETeqQKmUZg3SI1CtIkEaKRBRAEETJJ8YllI1iJMsxZTSMsYSoc5loKEZwxDLVn39InUsAdoARHAeJtKmkZV6RYQpZLBKiTkACT6RDZEsMZ1ygldqvxEh2dQxF2Ya10pGGUek74hEIWeQZNnVaZtFEhMtJzJ5/WiYBWC798ogkglyVftrWLe0t8/eZww/5UvhR15r8aN0A5mL2z0pgTzyhmirA5k7U6g5yDB/+FVf9RH+kxmGvdx6D+GsU/NWev7SioQEveQxfnBxUVLfJxJyyjbCArODE6ehjBbZS/jZpjKJ3SyMY5clj59IqWuVA5QgDKGGDKFbkcifTmyt/4wmWtQch0Kf2h38RCptxYCmdMGi2Unscx4KH+4RzjY7ak2ciVNJ3T8KtZZ/8fhHZkWmXbZIlrUnegPLXoac+SqA+BzAhKxTjY3yMdqYbt6/MTml03ZMM0KQpMtMpQWpaw4xJZQSAFJJL4TQhueQLlfl+zbNZgZc7eKKlcYKiQFOp6klIBIABPKEC9LXOsk5cu0SloW5UioAINNHBFMwYu3dYJ9qSwmYULq2hPI84n3IwILnAlAMjdOYp3vbA9T4CByZ7w42rYWY+YJMUb82UFmTLVjJKlMzUpU/XWG6tVp+EU8wNiWE7u0ABekRWqY9PSGa67hVaFhCPZHtrAoka+MFZmzVhWrdSlHeDM4iS+ufCT0EdbV1ocHPy7fGeNTMOImXcghQMNNkW6XOTkeRia07KLlIxheIJqxDGkU7ttmFC5SsjUNmFO48DkYBbYtwyk2M1YH32m1tu9wSmJ7kvGZIBMlDrIIJI+nyilabWwwuK0BJy7RQnWwhsRJA5n9Y6iMy4M07AQvJmAqXNnEFbHClIo9K9oXraoKJMSTLcNHMQqSFVBA6QwiFeTFyyniUjLEaTJcW1BI94RCSkZnwEMqxgHAxKqCYlxGLC7MzEaxrMDB40Wg1HEi3jCojyl4ogLkxYRJI7/COkAT28mWUzCWGtPBozarQwwJzPtH5RVXMw0GfONZCY8q94Ox+0u2OW5Ah2sUnClI1aFa6JXECawyyrRXL6pDCxC0E9Jdcc49Ee++voRmNZi+DKzxHMMbGMFMezO4gG8rOx6GAtolQ52mSFJIhctcnMNA2jVbQPDHsvtUuzEIW6pPL3kdU/p5dQE6W0RQNlDDBjCsQcid7Fqsd4yEptAExHuThRaej5jsfKAdusM26QCQbRY1HhnJ9qW+SVpy8X9aRy66b3m2deKUpuaTVKu4+ecdN2Y2/lzBu1skqDGXMYoW+gJDeBhK6jKlWGR+8bqu544Mk/xlZlBxNT4uD5GI5+2VhVKMmeUrSS4ZJJBHIgfAg1MevrYWzWgldlXuJh/wDaX7BP8qtO1R2hLvG4J9nVhnSiOrOD45GEa9BQh3KT9f8AUbN7EYwIy3tt1ZxK3NilFOmNQCQP6UhyT1VCLMnqORL5uCXBz8+rwVsF1oWajD5/KsGk3KkZpCh0L+hrDtaV1/pEEzseDJbsvG2rktOnKWkiiVpQqnMlSX8zCtebJBUkkrUEuGYJbMd3A01MO0lOkULVdMtS3VQHPvzjmQDuxPdeDERTkufWN7NIJIDPVnh9kbPSFUCko04h9ARVTshMkrxpWlaCw4S7fvG11AbggicZMdDmBU3WAQyX6xvOuxOeR6Q32e6VHQxMrZ1R0goEXZpzuddTZHziqq7lEs0dLXcaE+35RVXdY9yX4mNzG6KxsTJAOggcu71L0ZOphvm2VCfaONXIZDucviYF3pbZaB+Ia6IT+nzJjJbsJoKepgmVYkpHD4q/T9YoWu0gcKPE/XxjFvvJUynsp/KPmdYpgQRUPUwbP2EyhMXJCXpEMsQTuyVV/KCiBYwtYLNgY58/GCUpA5coqSVN3i1KV5RvAizZMm3ausejbejn6x6OwWZAVRgqiMHrGMFXjoSeLzfFyMUrdZSoOBXpF0Jq8ZI1juBPBiDFSfIihMlQ23hYwapz5QEnyIGRGUfMDmPRZmyYrlMYhgYZujaa0SGSF40D3F1Hgc0w83N9ocpTJm8P8swY0eCmceLRy2MQJqlbmFW1l4n0JYrdYZ2FSpCG5oZST3/sMoJKuywzW3awl9AatpQvrHzdInqQXQpSTzSSPhB+wbcWyUGxpmDktIPqljA/BYdMGEFoPqJ2u7tl1pxhSkD8hSolJH8ySkMW5RHaNkFrcKCadW8qRzGzfaUsUVJIH8kwj0IgpI+0+WPdmjrhln1d4xsYdVmy4JyDHWz7Dsagkf1Bv1glK2YCBwy0k93+IhEH2pyW9qd/pEV7R9qUo+7OV3Sj5mNBf/UzJOf7p0UXapP5U9yIr2iSge1NHYOfgG9Y5ba/tLJ9iSf+5beiR84C2zbu1rfDglv+VLnzU/wjWLD0GJnyDvOmW62hJIQkf1KP18YTL72hlPxzBMIdkIqnyHC/d2hItt4TZpeZMUvoTTyyEVY0Kj/cZw2gfpEN3htHMWMKAJafNR8dPCApL1OceAjdKIKqgdIJmJ6zAESoRG6JUShEamCZqlMFrufDA5KYJXdyjomG6QlJDnR4nCmiCWKRKhQ1+vr5RqBlnEfpv0j0Q0+gY9Hpyf/Z",
  title : "Sangham Fast Food",
  starRating : "3",
  deliveryTime : "40-45",
  cuisines : " Asian, Tibetan, Desserts",
  location : "Worli"
    },

{
  imgUrl : "https://b.zmtcdn.com/data/reviews_photos/3cb/86fc2e79bd6f05c53064aafa016643cb_1535579441.jpg?fit=around|750:500&crop=750:500;*,*",
  title : "Bharat cafe",
  starRating : "4.5",
  deliveryTime : "40-45",
  cuisines : "punjabi Thali, North Indian Thali",
  location : "Ghatkopar(west)"
    }
  ]

    return(
      <div className="container d-flex flex-wrap gap-4">
      {
        restaruntData.map((restarunt)=>{
          return(
            <Restrauntcard
            imgUrl={restarunt?.imgUrl}
            title={restarunt?.title}
            starRating={restarunt?.starRating}
            deliveryTime={restarunt?.deliveryTime}
            cuisines={restarunt?.cuisines}
            locaion={restarunt?.locaion}
            />
      
          );
        })
      }
      
      </div>
    );
  };

  export default Cardconatiner;