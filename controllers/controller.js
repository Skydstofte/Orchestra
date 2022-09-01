export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(member) {
        return `<tr class="memberrow">
        <td>${member.getOrchestraMemberId()}</td>
        <td>${member.getName()}</td>
        <td>${member.getInstrument()}</td>
        <td>${member.getSeniority()}</td>
        <td>${member.getResidence()}</td>
        <td><button type="button" id="${member.getOrchestraMemberId()}">Delete</button></td>
        </tr>
        `
    }


    omSearch(orchestraMemberId) {
        const member = this.model.memberList.getMember(orchestraMemberId);
        let template = "";
        console.log(member)
        console.log(orchestraMemberId)
        if (member !== null) {
            template = this.buildTemplate(member);
        } else {
            template =`
            <tr class="memberrow">
                <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    search(searchMember) {
        const member = this.model.memberList.search(searchMember);
        let template = "";

        if (member !== null) {
            template = this.buildTemplate(member);
        } else {
            template = `
            <tr class="memberrow">
                <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }
    showAllMembers() {
        let template ="";
        for (const member of this.model.memberList.getAllMembers()) {
            template += this.buildTemplate(member);
        }
        this.view.message(template);
    }

    addMember(member) {
        const doesMemberAlreadyExist = this.model.memberList.getMember(member.orchestraMemberId);

        if (doesMemberAlreadyExist === null) {
            this.model.memberList.addMember(member.orchestraMemberId, member.name, member.instrument, member.seniority, member.residence);
            this.view.snackbar("This member has been added to the orchestra")
            this.showAllMembers();
        } else {
            this.view.snackbar("This member already exist");
        }
    }

    deleteMember(orId) {
        this.model.memberList.deleteMember(orId);
        this.view.snackbar("The member was deleted");
    }
}