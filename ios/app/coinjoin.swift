import UIKit
import CoinjoinTS

class ViewController: UIViewController {
    let coinjoinService = CoinjoinService()

    override func viewDidLoad() {
        super.viewDidLoad()

        DispatchQueue.global().async {
            let transactions = self.coinjoinService.getCoinjoinTransactions()
            // Update UI with transactions on the main thread
            DispatchQueue.main.async {
                // Update UI
            }
        }

        createTransactionButton.addTarget(self, action: #selector(createTransaction), for: .touchUpInside)
    }

    @objc func createTransaction() {
        DispatchQueue.global().async {
            self.coinjoinService.createCoinjoinTransaction(amount: 0.1) // Example amount
        }
    }
}

