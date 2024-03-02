import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import com.yourpackagename.payjoin.PayJoinService

class MainActivity : AppCompatActivity() {
    private val payJoinService = PayJoinService()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.payJoinButton).setOnClickListener {
            GlobalScope.launch {
                val transactionData = Any() // Prepare transaction data
                val response = payJoinService.initiatePayJoinTransaction(transactionData)
                // Handle response
            }
        }
    }
}