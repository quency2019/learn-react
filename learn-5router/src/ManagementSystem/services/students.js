
export async function getAllStudents() {
    return await fetch('http://open.duyiedu.com/api/student/findAll?appkey=quency_1559029619103')
        .then(res=>res.json())
        .then(res=>res.data)

}
export async function getStudents(current=1,limit=10){
    return await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=D_11_1558917638360&page=${current}&size=${limit}`)
    .then(res=>{
        return res.json()})
    .then(res=>{
        return res.data})}
