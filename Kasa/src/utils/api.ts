export const getAllDatas = async () => {
    const data = await fetch('../../data.json').then(res => res.json())
    return data
}

export const getOneData = async ({params} : {params:any}) => {
    const data = await fetch('../../data.json').then(res => res.json())
    return data.find((item: any) => item.id === params.id)
}