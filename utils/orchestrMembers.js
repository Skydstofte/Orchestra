import Member from "./memberClass.js"

export default class OrchestrMembers {
    constructor() {
        this.members = [];
    }

    addMember(orchestraMemberId, name, instrument, seniority, residence) {
        const newMember = new Member(orchestraMemberId, name, instrument, seniority, residence);
        this.members.push(newMember);
    }

    getMember(orchestraMemberId) {
        for (const member of this.members) {
            if (orchestraMemberId == member.orchestraMemberId) {
                return member;
            }
        }
        return null;
    }

    search(wantedMember) {
        const {
            orchestraMemberId,
            name,
            instrument,
            seniority,
            residence,
        } = wantedMember;

        for (const member of this.members) {
            if (member.name === name
                || member.instrument === instrument
                || member.seniority === seniority
                || member.residence === residence) {
                return member;
            }
        }
        return null;
    }

    getAllMembers() {
        return this.members;
    }

    deleteMember(omId) {          //orchestraMemberId
        const index = this.members.map(member => member.orchestraMemberId).indexOf(omId);
        this.members.splice(index, 1); //removes member from member object list
    } 
}