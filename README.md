# Hello Celo
A repo to get started with the exercise outline here: https://docs.celo.org/v/master/developer-guide/start/hellocelo

Transaction receipt
CELO Transaction receipt: { blockHash:
   '0xada40ee0fd301bdf040871fe5a5c80af290d177176bb415450cfb24a5bb50af1',
  blockNumber: 6341775,
  contractAddress: null,
  cumulativeGasUsed: 36914,
  from: '0x6b0b94a8655818096129eeb222c76627c938b5f7',
  gasUsed: 36914,
  logsBloom:
   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000008000000004000000000000000000000100001000000000000000000000000000000000000000000000000000000000010000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000020000000000000000000000000000000000000000000000000040000000040000000000000000000000000000020000000',
  status: true,
  to: '0xf194afdf50b03e69bd7d057c1aa9e10c9954e4c9',
  transactionHash:
   '0xe5d051d73c62981492f1bdf0a0e1bc3e74a243304d13ce68d517e7959a62bcf2',
  transactionIndex: 0,
  events:
   { Transfer:
      { address: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
        blockNumber: 6341775,
        transactionHash:
         '0xe5d051d73c62981492f1bdf0a0e1bc3e74a243304d13ce68d517e7959a62bcf2',
        transactionIndex: 0,
        blockHash:
         '0xada40ee0fd301bdf040871fe5a5c80af290d177176bb415450cfb24a5bb50af1',
        logIndex: 0,
        removed: false,
        id: 'log_b2d07c2d',
        returnValues:
         Result {
           '0': '0x6b0B94A8655818096129EeB222c76627c938B5f7',
           '1': '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d',
           '2': '100000',
           from: '0x6b0B94A8655818096129EeB222c76627c938B5f7',
           to: '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d',
           value: '100000' },
        event: 'Transfer',
        signature:
         '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        raw:
         { data:
            '0x00000000000000000000000000000000000000000000000000000000000186a0',
           topics:
            [ '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
              '0x0000000000000000000000006b0b94a8655818096129eeb222c76627c938b5f7',
              '0x000000000000000000000000d86518b29bb52a5dac5991eacf09481ce4b0710d',
              [length]: 3 ] } } } }
cUSD Transaction receipt: { blockHash:
   '0xada40ee0fd301bdf040871fe5a5c80af290d177176bb415450cfb24a5bb50af1',
  blockNumber: 6341775,
  contractAddress: null,
  cumulativeGasUsed: 131531,
  from: '0x6b0b94a8655818096129eeb222c76627c938b5f7',
  gasUsed: 94617,
  logsBloom:
   '0x00000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000040000000000000000008000000000000000000000000000008100001000000000000000000000000000000000000000000000000000000000010000000000000000800000000000000000000000000400000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000000000002000000000100000000000020000000000000000200000002000000000000000000000000040000000040000000000000000000000000000000000000',
  status: true,
  to: '0x874069fa1eb16d44d622f2e0ca25eea172369bc1',
  transactionHash:
   '0xb6de3abf56421971ae2d7c4f187ce826f3b479c058be56cd353e85ca6d6b6458',
  transactionIndex: 1,
  events:
   { Transfer:
      [ { address: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
          blockNumber: 6341775,
          transactionHash:
           '0xb6de3abf56421971ae2d7c4f187ce826f3b479c058be56cd353e85ca6d6b6458',
          transactionIndex: 1,
          blockHash:
           '0xada40ee0fd301bdf040871fe5a5c80af290d177176bb415450cfb24a5bb50af1',
          logIndex: 1,
          removed: false,
          id: 'log_040df668',
          returnValues:
           Result {
             '0': '0x6b0B94A8655818096129EeB222c76627c938B5f7',
             '1': '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d',
             '2': '100000',
             from: '0x6b0B94A8655818096129EeB222c76627c938B5f7',
             to: '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d',
             value: '100000' },
          event: 'Transfer',
          signature:
           '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
          raw:
           { data:
              '0x00000000000000000000000000000000000000000000000000000000000186a0',
             topics: [Array] } },
        { address: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
          blockNumber: 6341775,
          transactionHash:
           '0xb6de3abf56421971ae2d7c4f187ce826f3b479c058be56cd353e85ca6d6b6458',
          transactionIndex: 1,
          blockHash:
           '0xada40ee0fd301bdf040871fe5a5c80af290d177176bb415450cfb24a5bb50af1',
          logIndex: 2,
          removed: false,
          id: 'log_9607f0c5',
          returnValues:
           Result {
             '0': '0x6b0B94A8655818096129EeB222c76627c938B5f7',
             '1': '0xAA963FC97281d9632d96700aB62A4D1340F9a28a',
             '2': '21999465564219',
             from: '0x6b0B94A8655818096129EeB222c76627c938B5f7',
             to: '0xAA963FC97281d9632d96700aB62A4D1340F9a28a',
             value: '21999465564219' },
          event: 'Transfer',
          signature:
           '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
          raw:
           { data:
              '0x000000000000000000000000000000000000000000000000000014022654883b',
             topics: [Array] } },
        { address: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
          blockNumber: 6341775,
          transactionHash:
           '0xb6de3abf56421971ae2d7c4f187ce826f3b479c058be56cd353e85ca6d6b6458',
          transactionIndex: 1,
          blockHash:
           '0xada40ee0fd301bdf040871fe5a5c80af290d177176bb415450cfb24a5bb50af1',
          logIndex: 3,
          removed: false,
          id: 'log_7656c129',
          returnValues:
           Result {
             '0': '0x6b0B94A8655818096129EeB222c76627c938B5f7',
             '1': '0x050f34537F5b2a00B9B9C752Cb8500a3fcE3DA7d',
             '2': '87997862256876',
             from: '0x6b0B94A8655818096129EeB222c76627c938B5f7',
             to: '0x050f34537F5b2a00B9B9C752Cb8500a3fcE3DA7d',
             value: '87997862256876' },
          event: 'Transfer',
          signature:
           '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
          raw:
           { data:
              '0x00000000000000000000000000000000000000000000000000005008995220ec',
             topics: [Array] } },
        [length]: 3 ] } }
