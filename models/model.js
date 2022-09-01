import OrchestrMembers from "../utils/orchestrMembers.js";

export default class Model {
    constructor() {
        this.memberList = new OrchestrMembers;
        this.memberList.addMember("1", "Rikke Skydstofte", "Double bass", "42", "Beder");
        this.memberList.addMember("2", "Maria Christiansen", "Flute", "25", "Tjørring");
        this.memberList.addMember("3", "Annika Stær", "Piano", "36", "Tjørring");
        this.memberList.addMember("4", "Mathilde Christiansen", "Piano", "12", "Aarhus");
    }
}