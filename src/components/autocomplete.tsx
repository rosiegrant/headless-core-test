import React from 'react';

/**
 * Universal Results Component
 */
export default class Autocomplete extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        if (this.props.results.length === 0) {
            return (
                <div>
                    no autocomplete results
                </div>
            )
        } 
        return (
            
            <div className="flex">
                <div className="overflow-x-auto m-auto">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="bg-white divide-y divide-gray-200">
                        {this.props.results.map((result: { value: {} | null | undefined; }) => 
                            <tr>
                            <td className="px-6 py-4">
                                <div className="flex items-center text-left">
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                    {result.value}
                                    </div>
                                </div>
                                </div>
                            </td>
                            </tr>
                        )}
                        </tbody>
                        </table>
                    </div>
                        
                    </div>
                </div>
            </div>

        )
    }
}