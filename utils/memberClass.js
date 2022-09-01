export default class Member {
    constructor(orchestraMemberId, name, instrument, seniority, residence) {
        this.orchestraMemberId = orchestraMemberId;
        this.name = name;
        this.instrument = instrument;
        this.seniority = seniority;
        this.residence = residence;
    }

    getOrchestraMemberId() {
        return this.orchestraMemberId;
    }
    getName() {
        return this.name;
    }
    getInstrument() {
        return this.instrument;
    }
    getSeniority() {
        return this.seniority;
    }
    getResidence() {
        return this.residence;
    }
}