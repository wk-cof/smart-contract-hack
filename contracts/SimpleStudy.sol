pragma solidity ^0.4.0;

/**
 * Description of the smart contract
 *
 * This is an example of a 4-week trial on 2 patients
 * For each patient a CT must provide the following
 * - A filled in questionaire upon enrollment
 * - Body temperature after the week 1
 * - Body temperature after the week 2
 * - Body temperature after the week 3
 * - Body temperature after the week 4
 */

contract SimpleStudy {

    address studyOwner;

    uint8 private constant MAX_PATIENTS = 2;

    struct Patient {
        address patientAddress;
        string fullName;
    }

    struct Questionaire {
        string firstName;
        string lastName;
        uint8 age;
        string gender;
    }

    struct StudyData {
        Questionaire questionaire;
        uint[] tempData;
    }

    mapping(address => StudyData) private patientsData;
    mapping(address => Patient[]) private patientsMap;
    mapping(string => address) private providerMap;

    // Events
    event studyCreated(address creator);

    function SimpleStudy() public {
        studyOwner = msg.sender;
        studyCreated(studyOwner);
    }

    // Getters
    function getStudyOwner() public constant returns(address) {
        return studyOwner;
    }

    function getPatient(address patientAddress) private constant returns(Patient) {
        for (uint i = 0; i < patientsMap[msg.sender].length; i++) {
            if (patientsMap[msg.sender][i].patientAddress == patientAddress) {
                return patientsMap[msg.sender][i];
            }
        }
    }

    function getPatientName(address patientAddress) public constant returns(string) {
        var patient = getPatient(patientAddress);
        return patient.fullName;
    }

    function getStudyDataForPatient(address patientAddress) public constant returns(string, string, uint8, string, uint, uint, uint, uint) {
        var patientStudyData = patientsData[patientAddress];
        return (patientStudyData.questionaire.firstName, patientStudyData.questionaire.lastName, patientStudyData.questionaire.age, patientStudyData.questionaire.gender,
            patientStudyData.tempData[0], patientStudyData.tempData[1], patientStudyData.tempData[2], patientStudyData.tempData[3]);
    }

    // Setters
    function addProvider(string userName) public {
        providerMap[userName] = msg.sender;
    }

    function addPatient(string fullName, address patientAddress) public {
        var newPatient = Patient(patientAddress, fullName);
        patientsMap[msg.sender].push(newPatient);
    }

    function submitQuestionaireForPatient(address patientAddress, string firstName, string lastName, uint8 age, string gender) public {
        var newQuestionaire = Questionaire(firstName, lastName, age, gender);
        uint[] memory newTempData = new uint[](4);
        var newStudyData = StudyData(newQuestionaire, newTempData);
        patientsData[patientAddress] = newStudyData;
    }

    function submitTemperature(address patientAddress, uint weekNumber, uint tempData) public {
        var studyData = patientsData[patientAddress];
        studyData.tempData[weekNumber] = tempData;
    }
}