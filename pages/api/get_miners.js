export default async function handler(req, res) {
    try {
        const data = await fetch('https://us-east4-just-shape-317505.cloudfunctions.net/function-get?RunIt=1&Query=pending miner rewards&PayOutID=921', 
        {  })
        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}