
//Tworzę klasę, która pozwoli na wykorzystanie danych do dalszej rozbudowy aplikacji, np. dodania dodatkowych rekomendacji dla użytkownika itp.

class PageUser {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

//Tworzę w klasie metodę, która liczy wskaźnik BMI. Wykorzystuję wzór matematyczny na liczenie BMI tj. BMI = waga/wzrost*wzrost;
    
    countBmi() {
        var bmi = this.weight / Math.pow(this.height, 2);
        return parseFloat(bmi.toFixed(2));
    };
    
//Tworzę metodę, która na podstawie instrukcji warunkowej interpretuje wynik BMI. 

    bmiInfo() {
        if (this.countBmi() < 18.5) {
            return ' - masz niedowagę. ';
        } else if (this.countBmi() >= 25 && this.countBmi()<30) {
            return ' - masz nadwagę. ';
        } 
        else if (this.countBmi() >= 30) {
            return ' - masz otyłość. ';
        } 
        else {
            return ' - Twoja waga jest w normie. ';
        }
    };

//Tworzę metodę, która drukuje wynik i zalecenia.
    
    printInfo() {
        if (this.countBmi() < 18.5) {
            return 'Twój wskażnik BMI to: ' + this.countBmi() + this.bmiInfo() + " Zalecenie: powinieneś przytyć."
        } else if (this.countBmi() >= 25) {
            return 'Twój wskaznik BMI to: ' + this.countBmi() + this.bmiInfo() + " Zalecenie: powinieneś schudnąć."
        } else {
            return 'Twój wskaznik BMI to: ' + this.countBmi() + this.bmiInfo() + " Zalecenie: Gratulacje, tak dalej!"
        }
    }
};

// Dodaję do dokumentu DOM paragraf, w którym wyświetlą się zalecenia.

var addToDOM = function () {
    var userHeight = parseFloat(document.getElementById('wzrost').value);
    var userWeight = parseFloat(document.getElementById('waga').value);

    var currentUser = new PageUser(userHeight, userWeight);

    var printResult = document.createElement('p');
    printResult.innerHTML = currentUser.printInfo();
    printResult.style.color="#ffff00";

    this.parentElement.insertBefore(printResult, this.nextSibling);
    
}

document.getElementById("licz").addEventListener("click", addToDOM);


        
   





