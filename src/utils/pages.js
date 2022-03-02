import { useMemo } from "react"

export const getPageCount = (totalCount, sizePage) => {
    return Math.ceil(totalCount / sizePage)
}

export const usePagination = (totalPages) => {
        let result = [];
        for (let i = 0; i < totalPages; i++){
            result.push(i + 1)
        }
    return result;
}