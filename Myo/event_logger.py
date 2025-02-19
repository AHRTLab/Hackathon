import time
import argparse
from datetime import datetime

parser = argparse.ArgumentParser(fromfile_prefix_chars='@')
parser.add_argument('-f', '--output', action='store',
                    type=argparse.FileType('a'), dest='output',
                    default = 'test.txt',
                    help='Output file path if outputting to file')
args = parser.parse_args()

def main():
    print('Event Logging Initiated')
    try:
        while True:
            event = input()
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S:%f')
            print(timestamp, event)
            args.output.write(timestamp)
            if event:
                args.output.write(': ')
                args.output.write(event)
            args.output.write('\n')
            args.output.flush()
    except KeyboardInterrupt:
        print("\nQuitting")
    except EOFError:
        pass
    finally:
        print("Closing File")
        if args.output:
            try: 
                args.output.close()
            except KeyboardInterrupt:
                args.output.close()
    print("Closing Event Logger")
if __name__ == '__main__':
    main()
