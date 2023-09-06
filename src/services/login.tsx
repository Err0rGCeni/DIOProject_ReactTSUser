import { api } from "../api"

export const login = async (email: string, pwd: string): Promise<boolean> => {
    try {
        const data: any = await api
    
        if (email === data.email && pwd === data.password) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Erro ao fazer login:", error);
        return false;
      }
}
