import service from "@/axios";
import type { LoginParams } from "./type";
import type { AxiosResponse } from "axios";
export const loginApi = (data: LoginParams): Promise<AxiosResponse<any>> => {
    return service.post('/v1/staff/login', data)
}