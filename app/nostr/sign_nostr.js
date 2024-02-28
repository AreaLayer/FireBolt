import { NostrSigner } from '@nostr-connect/connect';
import { getPublicKey, signEvent, nip06, nip05 } from 'nostr-tools';

const sk = nip06.privateKeyFromSeedWords(myWords);

class MobileHandler extends NostrSigner {

  async get_public_key(): Promise<string> {
    return getPublicKey(sk);
  }

  async sign_event(event: Event): Promise<string> {
    if (!this.event) throw new Error('No origin event');

    // emit event to the UI to show a modal
    this.events.emit('sign_event_request', event);

    // wait for the user to approve or reject the request
    return new Promise((resolve, reject) => {
      
      // listen for user accept 
      this.events.on('sign_event_approve', () => {
        resolve(signEvent(event, this.self.secret));
      });

      // or reject
      this.events.on('sign_event_reject', () => {
        reject(new Error('User rejected request'));
      });
    });
  }
}
