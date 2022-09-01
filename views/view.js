import Member from "../utils/memberClass.js"

export default class View {
    constructor(controller){
        const self = this;
        const omIdSearchForm = document.getElementById("omIdSearchForm");
        const omIdfield = document.getElementById("omIdField");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const name = document.getElementById("name");
        const instrument = document.getElementById("instrument");
        const seniority = document.getElementById("seniority");
        const residence = document.getElementById("residence");
        const showAllMembersButton = document.getElementById("showAllMembersButton")
        const memberDialogForm = document.getElementById("memberDialogForm");
        const addMemberButton  = document.getElementById("addMemberButton");
        const memberDialog = document.getElementById("memberDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenOmIdField = document.getElementById("hiddenOmIdField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

        self.controller = controller;

        showAllMembersButton.onclick = function() {
            self.controller.showAllMembers();
        }

        omIdSearchForm.onsubmit = function(e) {
            e.preventDefault();
            self.controller.omSearch(omIdfield.value);
        }

        searchForm.onsubmit = function(e) {
            e.preventDefault();
            const wantedMember = new Member("", name.value, instrument.value, seniority.value, residence.value);
            self.controller.search(wantedMember);
            searchPanel.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function() {
            searchPanel.classList.add("searchPanelAnim");
        }

        closeCross.onclick = function() {
            searchPanel.classList.remove("searchPanelAnim");
        }

        // Dialog eventhandler
        addMemberButton.onclick = function() {
            memberDialogForm.reset();
            memberDialog.showModal();
        }

        cancelButton.onclick = function() {
            memberDialog.close();
        }

        memberDialogForm.onsubmit = function() {
            self.controller.addMember({
                orchestraMemberId: document.getElementById("omIdfield").value,
                name: document.getElementById("namefield").value,
                instrument: document.getElementById("instrumentfield").value,
                seniority: document.getElementById("seniorityfield").value,
                residence: document.getElementById("residencefield").value
            })
        }

        searchResult.onclick = function(e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenOmIdField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function() {
            confirmDialog.clone();
        }

        confirmDialogForm.onsubmit = function() {
            self.controller.deleteMember(hiddenOmIdField.value)
            self.controller.showAllMembers();
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML="";
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout(function() {
            snackbar.className = snackbar.className.replace("show", "")
        },3000);
    }
}