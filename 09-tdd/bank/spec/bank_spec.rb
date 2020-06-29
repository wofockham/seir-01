require_relative '../bank'

describe Bank do
  let (:bank) { Bank.new 'TDD Bank' }
  describe '.new' do
    it 'creates a new bank object' do
      expect(bank).to_not be nil
    end

    it 'assigns the bank a name' do
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  describe '#create_account' do
    it 'creates an account for a particular user' do
      bank.create_account 'Craigsy', 7
      expect(bank.accounts['Craigsy']).to eq 7
    end
  end

  describe '#deposit' do
    it 'deposits money into a particular account' do
      bank.create_account 'Jonesy', 200
      bank.deposit 'Jonesy', 300
      expect(bank.accounts['Jonesy']).to eq 200+300
    end
  end

  describe '#withdraw' do
    it 'withdraws an amount from a particular account' do
      bank.create_account 'Bazza', 1000
      bank.withdraw 'Bazza', 58.72
      expect(bank.accounts['Bazza']).to eq 1000-58.72
   end

   it 'ignores withdrawals that exceed the balance' do
     bank.create_account 'Charlie', 1
     bank.withdraw 'Charlie', 1_000_000
     expect(bank.balance('Charlie')).to eq 1
   end
 end

 describe '#balance' do
   it 'returns the balance for some particular account' do
     bank.create_account 'Robbo', 5000
     bal = bank.balance 'Robbo'
     expect(bal).to eq 5000
   end
 end
end
