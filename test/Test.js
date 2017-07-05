/**
 *
 *
 */
export function TestException(message, name) {
   this.message = message;
   this.name = name || 'TestException';

   console.error(`${this.name} - ${this.message}`);
}
