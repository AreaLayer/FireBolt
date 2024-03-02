import UIKit
import PayJoin

class ViewController: UIViewController {
    let payJoinService = PayJoinService()

    override func viewDidLoad() {
        super.viewDidLoad()

        let payJoinButton = UIButton(type: .system)
        payJoinButton.setTitle("Initiate PayJoin", for: .normal)
        payJoinButton.addTarget(self, action: #selector(initiatePayJoin), for: .touchUpInside)
        view.addSubview(payJoinButton)
    }

    @objc func initiatePayJoin() {
        DispatchQueue.global().async {
            let transactionData = Any() // Prepare transaction data
            let response = self.payJoinService.initiatePayJoinTransaction(transactionData: transactionData)
            // Handle response
        }
    }
}