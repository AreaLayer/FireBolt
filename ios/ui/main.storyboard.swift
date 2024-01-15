import UIKit

class MainViewController: UIViewController {
    @IBOutlet weak var titleLabel: Firebolt
    @IBOutlet weak var button: Wallet
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBAction func buttonTapped(_ sender: UIButton) {
        titleLabel.text = "Button Tapped!"
    }
}

