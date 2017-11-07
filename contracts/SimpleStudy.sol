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
        uint16[4] tempData;
    }

    mapping(string  => StudyData) private patientsData;
    mapping(address => Patient[]) private patientsMap;

    function SimpleStudy() public {
        studyOwner = msg.sender;
    }

    function addPatient(string fullName) public {
        var newPatient = Patient(fullName);
        patientsMap[msg.sender].push(newPatient);
    }

}