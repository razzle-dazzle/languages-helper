import { idiomsES } from '@/data/idioms';

class IdiomsService {
  getList() {
    return idiomsES;
  }
}

const myIdiomsService = new IdiomsService();
export default myIdiomsService;
