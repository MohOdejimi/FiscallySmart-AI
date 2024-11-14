module.exports = {
    getLearningPage: (req, res) => {
        res.render('learn.ejs') 
    },
    getStockPage: (req, res) => {
        res.render('stock.ejs')
    },
    getBondPage: (req, res) => {
        res.render('bond.ejs')
    },
    getEtf: async (eq, res) => {
        res.render('etf.ejs')
    },
    getIntroToInvesting: (req, res) =>{
        res.render('introToInvesting.ejs')
    },
    getRiskPage: (req, res) => {
        res.render('risk.ejs')
    }
}
