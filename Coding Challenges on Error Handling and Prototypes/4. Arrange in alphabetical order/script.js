const books=[
    {
        tittle : "marline",
        author: "b.dolrm",
        pages:"204",
        year:1990

    },
    {
        tittle : "mahgrline",
        author: "b.oprm",
        pages:"204",
        year:1991

    },
    {
        tittle : "mharline",
        author: "b.rmhg",
        pages:"204f",
        year:1992

    },
    {
        tittle : "mafhjrline",
        author: "d.dolrm",
        pages:"2047",
        year:1996

    }
]
function logtittles(tittles){
    tittles.sort()
    console.log(tittles.join(","));
}
function sortbyyear(books,cback){
    const tittles=books.map((book) =>book.tittle)

    cback(tittles)
}
sortbyyear(books,logtittles)