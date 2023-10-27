import { useRecoilValue } from "recoil"
import { consejosAtom } from "../app/consejosState"

export const useConsejos = () => {
    const consejos = useRecoilValue(consejosAtom)

    return { consejos }
}