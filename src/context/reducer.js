
export const ACTION={
    CALL_API:"call-api",
    SUCCESS:"success",
    ERROR:'error'
}


export  const Reducer=(state,action)=>{

    switch(action.type)
    {
        case ACTION.CALL_API:{
                                return{
                                    ...state,
                                    loading:true
                                }
                            }
        case ACTION.SUCCESS:{
                                        return{
                                            ...state,
                                            loading:false,
                                            data:action.payload
                                             }
                            }
        case ACTION.ERROR:{
                            return{
                                ...state,
                                loading:false,
                                error:true
                            }
        }
        default:{
            return state;
        }

    }

}