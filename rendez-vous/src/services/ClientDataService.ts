import http from "@/http-common";

class ClientDataService {

    getAll(): Promise<any> {
    return http.get("/get-all-reservation",);
  }

  create(data:any): Promise<any> {
    return http.post("/create_client/", data);
  }

}

export default new ClientDataService();